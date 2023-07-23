import React from 'react';
import { Link, Stack}  from 'expo-router'
import { View,
        Image,
        Text,
        StyleSheet,
        ScrollView,
        TextInput,
        Button,
} from 'react-native';

const PostPage = () => {
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
                {/* 사진을 넣을 수 있게 구현 */}
                <View style={styles.im}>
                    <Text style={styles.ww}>📸여기를 클릭!📸</Text>
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
            <View style={styles.con}>
                <Text style={styles.wr}>⚠️조건 정하기⚠️</Text>
                <Text style={styles.input}>
                    <Text>
                        
                    </Text>
                </Text>
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