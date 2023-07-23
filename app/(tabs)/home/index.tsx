import { useAssets } from 'expo-asset';
import { Link, Stack}  from 'expo-router';
import { Image } from 'expo-image';
import { View, Text, Button, ScrollView, StyleSheet, TextInput  } from 'react-native';
import Insta from '../../assets/image/Instagram_logo.jpg'

const HomePage = () => {
    return (
        <ScrollView>
            <View style={styles.cont}>
                    <Image
                        style={styles.ima}
                        source={Insta}
                />
                <Text style={styles.name}>UserName</Text>
            </View>
            <View style={styles.cont2}>
                <Image
                    source={Insta}
                    style={styles.im}
                />
            </View>
            <View style={styles.box}></View>
            {/* 댓글 모이는 box */}
            <View style={styles.cont3}>
                <TextInput
                    style={styles.input}
                    placeholder="댓글 달기"
                    multiline={true}
                />
                <Button
                    title='게시'
                /> 
                {/* 버튼을 누르면 댓글이 저장된다. */}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cont2: {
        alignItems: 'center',
    },
    cont3: {
        borderWidth: 1,
        width: '100%',
        height: 80,
    },
    cont: {
        borderWidth: 1,
        alignItems: 'center',
    },
    ima: {
        width: 40,
        height: 40,
        alignItems: 'center',
    },
    im: {
        width: 300,
        height: 300,
    },
    name: {
        fontWeight: 'bold',

    },
    input: {
        width: '100%',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    box: {
        borderWidth: 1,
        width: '100%',
        height: 100,
        borderBottomWidth: 0,
    },
})

export default HomePage