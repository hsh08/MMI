import React from 'react';
import { Link, Stack}  from 'expo-router'
import { View,
        Image,
        Text,
        StyleSheet,
        ScrollView,
        TextInput,
} from 'react-native';

const PostPage = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.np}>새 게시물</Text>
            </View>
            <View style={styles.tm}>
                <Text style={styles.wr}>글쓰기</Text>
                <TextInput
                    style={styles.input}
                    placeholder="나의 이야기 쓰기"
                    multiline={true}
                />
            </View>
        </View>
    
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        paddingBottom: 50,
        paddingTop: 20,
        backgroundColor: 'black',
    },
    np: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'black',
    },
    tm: {
        backgroundColor: 'white',
        paddingBottom: 10,
        paddingTop: 10,
        alignItems: 'center',
    },
    wr: {
        fontWeight: 'bold',
    },
    input: {
        width: 250,
        height: 100,
        borderColor: '#999',
        borderWidth: 1,
    }
});

export default PostPage