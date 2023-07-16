import { Link, Stack}  from 'expo-router'
import { View, Text, Button, ScrollView, Image, StyleSheet, TextInput  } from 'react-native';
import images from '/Users/hansanghyeog/Desktop/Coding/jutest/app/assets/image/Instagram_logo.jpg'

const HomePage = () => {
    return (
        <ScrollView>
            <View style={styles.cont}>
                    <Image
                        style={styles.ima}
                        source={images}
                />
                <Text style={styles.name}>UserName</Text>
            </View>
            <View style={styles.cont2}>
                <Image
                    source={images}
                    style={styles.im}
                />
            </View>
            <View style={styles.cont3}>
                <TextInput
                style={styles.input}
                placeholder="댓글 달기"
                multiline={true}
                />
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
        height: 50,
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
    }
})

export default HomePage