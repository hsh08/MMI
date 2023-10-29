import React, { useEffect, useState } from 'react';
import { Link, Stack}  from 'expo-router'
import { View,
        Image,
        Text,
        StyleSheet,
        ScrollView,
        TextInput,
        Button,
        FlatList,
} from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';


const imgDir = FileSystem.documentDirectory + 'images/';

const ensureDirExists = async () => {
    const dirInfo = await FileSystem.getInfoAsync(imgDir);
    if (!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync( imgDir, { intermediates: true } );
    }
}

export default function PostPage() {
    const [images, setImages] = useState<string[]>([]);
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');

    useEffect(() => {
        loadImages();
    }, []);

    const loadImages = async () => { 
        await ensureDirExists(); 
        const files = await FileSystem.readDirectoryAsync(imgDir);
        if (files.length > 0) {
            setImages(files.map(f => imgDir + f));
        }
    };

    const selectImage = async () => {
        const result =  await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.75
        });

        if (!result.canceled) {
            saveImage(result.assets[0].uri);
        }
    };

    const saveImage = async (uri: string) => {
        await ensureDirExists();
        const filename = new Date().getTime() + '.jpg';
        const dest = imgDir + filename;
        await FileSystem.copyAsync({ from: uri, to: dest });
        // setImages([...images, dest]);

        // Read the image file and convert it to a base64 string
        const base64Data = await FileSystem.readAsStringAsync(dest, { encoding: 'base64' });

        setImages([...images, base64Data]);
    };

    const deleteImage = async (uri:string) => {
        // await FileSystem.deleteAsync(uri);
        setImages(images.filter((i) => i !== uri));
    }

    const renderItem = ({ item }: { item: string }) => {
        const filename = item.split('/').pop();
        
        return (
            <View style={{ flexDirection: 'row', margin: 1, alignItems: 'center', gap: 5 }}>
                <Image source={{uri: 'data:image/jpeg;base64,' + item}} style={{ width: 100, height: 100 }} /> 
                <Text style={{flex: 1}}>{filename}</Text>
                <Ionicons.Button name="trash" onPress={() => deleteImage(item)} />
            </View>
        )
    };

    const createPost = async () => {
        try {
            const response = await fetch('http://localhost:3000/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    detail,
                    images   // This is now an array of base64 strings
                })
            });
    
            if (!response.ok) {
                throw new Error('Failed to create post');
            }
    
            const data = await response.json();
            
            console.log('Post created successfully', data.postId);

            // Clear the input fields and image data after successful post creation
            setTitle('');
            setDetail('');
            setImages([]);

        } catch (error) {
            console.error(error);
        }
    };    

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.np}>새 게시물</Text>
            </View>
            <View style={styles.con}>
                <Text style={styles.wr}>제목</Text>
                <TextInput
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                    style={styles.input2}
                    placeholder="제목 쓰기"
                    multiline={true}
                />
            </View>
            <View style={styles.con}>
                <Text style={styles.wr}>사진 넣기</Text> 
                <View style={styles.im}>
                    <Button title="Photo Library" onPress={selectImage} />
                    <FlatList data={images} renderItem={renderItem}/> 
                </View>
            </View>
            <View style={styles.con}>
                <Text style={styles.wr}>글쓰기📝</Text>
                <TextInput
                    value={detail}
                    onChangeText={(text) => setDetail(text)}
                    style={styles.input}
                    placeholder="나의 이야기 쓰기"
                    multiline={true}
                />
            </View>
            <View style={styles.but}>
                <Button
                    title='올리기'
                    onPress={createPost}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 300,
    },
    but: {
        backgroundColor: 'lightgray',
    },
    ww: {
        textAlign: 'center',
    },
    im: {
        borderWidth: 1,
        width: 250,
        height: 300,
    },
    con: {
        backgroundColor: 'white',
        paddingBottom: 10,
        paddingTop: 10,
        alignItems: 'center',
    },
    container: {
        paddingTop: 10,
        backgroundColor: 'black',
    },
    np: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'black',
        paddingBottom: 10,
    },
    wr: {
        fontWeight: 'bold',
    },
    input: {
        width: 250,
        height: 100,
        borderColor: '#999',
        borderWidth: 1,
    },
    input2: {
        width: 250,
        height: 50,
        borderColor: '#999',
        borderWidth: 1,
    },
});