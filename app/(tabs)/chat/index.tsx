import { Link, Stack}  from 'expo-router'
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';
import image from '../../assets/image/profile_image.jpg'

const ChatPg = () => {
    return (
        <ScrollView>
            <View style={styles.Gl}>
                <Text style={styles.tt}>Mcaht</Text>
            </View>
            <Link href="/ChatPage/Chage" style={styles.boxs}>
                <Image
                style={styles.ima}
                source = {image}
                />
                UserName1
            </Link>
            <Link href='/ChatPage/Chage2' style={styles.boxs}>
                <Image
                style={styles.ima}
                source = {image}
                />
                UserName2
            </Link>
            <Link href='/ChatPage/Chage3' style={styles.boxs}>
                <Image
                style={styles.ima}
                source = {image}
                />
                UserName3
            </Link>
            <Link href='/ChatPage/Chage4' style={styles.boxs}>
                <Image
                style={styles.ima}
                source = {image}
                />
                UserName4
            </Link>
            <Link href='/ChatPage/Chage5' style={styles.boxs}>
                <Image
                style={styles.ima}
                source = {image}
                />
                UserName5
            </Link>
            <Link href='/ChatPage/Chage6' style={styles.boxs}>
                <Image
                style={styles.ima}
                source = {image}
                />
                UserName6
            </Link>
            <Link href='/ChatPage/Chage7' style={styles.boxs}>
                <Image
                style={styles.ima}
                source = {image}
                />
                UserName7
            </Link>
            <Link href='/ChatPage/Chage8' style={styles.boxs}>
                <Image
                style={styles.ima}
                source = {image}
                />
                UserName8
            </Link>
            <Link href='/ChatPage/Chage9' style={styles.boxs}>
                <Image
                style={styles.ima}
                source = {image}
                />
                UserName9
            </Link>
            <Link href='/ChatPage/Chage10' style={styles.boxs}>
                <Image
                style={styles.ima}
                source = {image}
                />
                UserName10
            </Link>
        </ScrollView>
        
    )
}



const styles = StyleSheet.create({
    ima: {
        width: 70,
        height: 70,
        borderWidth: 0,
        borderRadius: 100,
    },
    Gl: {
        borderBottomColor: 'black',
        paddingBottom: 10,
        paddingTop: 10,
        backgroundColor: 'white',
    },
    tt: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    tb: {
        fontWeight: 'bold',
    },
    boxs: {
        marginTop: 10,
        paddingBottom: 10,
        width: 500,
        height: 70,
        borderWidth: 1,
        color: 'black',
        fontWeight: 'bold',
    }
})

export default ChatPg;