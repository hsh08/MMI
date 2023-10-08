import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet  } from 'react-native';
import heart from '../../assets/image/heart.jpg'
import image from '../../assets/image/profile_image.jpg'

const HomePage = () => {
    const [Like, setLike] = useState(0);

    const handleLikePress = () => {
        if (Like === 0) {
            setLike(1);
        } else {
            setLike(0);
        }
    };

    return (
        <ScrollView>
            <View style={styles.cont}>
                    <Image
                        style={styles.ima}
                        source={image}
                />
                <Text style={styles.name}>UserName</Text>
            </View>
            <View style={styles.cont2}>
                <Image
                    source={heart}
                    style={styles.im}
                />
            </View>
            <View style={styles.box}>
                <Text onPress={handleLikePress}>{Like === 0 ? '🤍' : '❤️'}</Text>
                {/* 좋아요 버튼에 따라 아이콘 변경 */}
                {Like > 0 && (
                    // like가 1 이상인 경우에만 좋아요 수 표시
                    <Text>{Like}</Text>
                )}
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