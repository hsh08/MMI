import React, { useState } from 'react';
import { Link, Stack}  from 'expo-router'
import { View,
        Image,
        Text,
        StyleSheet,
        ScrollView,
        TextInput,
        Button,
} from 'react-native';
import * as Filesystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';


const imgDir = Filesystem.documentDirectory + 'images/';

const ensureDirExists = async () => {
    const dirInfo = await FileSystem.getInfoAsync(imgDir);
    if (!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync( imgDir, { intermediates: true } );
    }
}

const PostPage = () => {

    const selectImage = async (useLibrary: boolean) => {
        let result;
        
        if (useLibrary) {
            result =  await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 0.75
            });
        } else {
            await ImagePicker.requestCameraPermissionsAsync();
            result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 0.75
            });
        }

        if (!result.canceled) {
            console.log(result.uri);
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
                    style={styles.input2}
                    placeholder="제목 쓰기"
                    multiline={true}
                />
            </View>
            <View style={styles.con}>
                <Text style={styles.wr}>사진 넣기</Text> 
                <View style={styles.im}>
                    <Button title="Photo Library" onPress={() => selectImage(true)} />
                    <Button title="Capture Image" onPress={() => selectImage(false)} />
                </View>
            </View>
            <View style={styles.con}>
                <Text style={styles.wr}>글쓰기📝</Text>
                <TextInput
                    style={styles.input}
                    placeholder="나의 이야기 쓰기"
                    multiline={true}
                />
            </View>
            <View style={styles.but}>
                <Button
                    title='올리기'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    but: {
        backgroundColor: 'lightgray',
    },
    ww: {
        textAlign: 'center',
    },
    im: {
        borderWidth: 1,
        width: 250,
        height: 100,
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

export default PostPage