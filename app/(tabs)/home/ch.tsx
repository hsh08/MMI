import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet, TextInput  } from 'react-native';
import image from '../../assets/image/profile_image.jpg'

const chats = () => {
    return (
        <ScrollView>
            <View>
                <Image
                source={image}
                style={styles.image}
                />
                <Text>나는 댓글이다</Text>
            </View>
            <View style={styles.chi}>
                <TextInput
                    style={styles.input}
                    placeholder="댓글 작성하기"
                />
                <Button
                    title='올리기'
                    color="#f194ff"
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    chi: {

    },
    image: {
        width: 50,
        height: 50,
    },
    input: {

    }
})

export default chats