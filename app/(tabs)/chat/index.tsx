import { Link, Stack}  from 'expo-router'
import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';
import image from '../../assets/image/profile_image.jpg'

const ChatPg = () => {
    return (
        <ScrollView>
            <View style={styles.Gl}>
                <Text style={styles.tt}>Mcaht</Text>
            </View>
            <Link href="/chat/ChatPage/Chage_A" style={styles.boxs} >
                <Image
                style={styles.ima}
                source = {image}
                />
                HanSangHyuk
            <Text style={styles.mbti}>ENFJ</Text>
            </Link>
            <Link href="/chat/ChatPage/Chage_B" style={styles.boxs} >
                <Image
                style={styles.ima}
                source = {image}
                />
                Juliet
            <Text style={styles.mbti}>INFJ</Text>
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
    },
    mbti: {
        color: "blue",
    },
})

export default ChatPg;