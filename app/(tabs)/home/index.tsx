import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, ScrollView, StyleSheet  } from 'react-native';
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
            <View style={styles.box}>
                <Text>

                </Text>
            </View>
            {/* 제목이나 내용, 태그 나오는 box */}
       </ScrollView>
    )
}

const styles = StyleSheet.create({
    cont2: {
        alignItems: 'center',
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
    box: {
        borderWidth: 1,
        width: '100%',
        height: 100,
    },
})

export default HomePage