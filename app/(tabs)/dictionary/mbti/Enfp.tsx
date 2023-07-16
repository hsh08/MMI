import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import Enfp from '../../../assets/mbti/enfp.png'
import styles from '../styles'

const enfp = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>외교관형</Text>
            <Text style={styles.subtitle}>-활동가-</Text>
            <Image
            source={Enfp} style={styles.image}
            />
            <Text>열정적이고 창의적인 성격으로 긍정적으로 삶을 바라보는 사교적이면서도 자유로운 영혼</Text>
        </ScrollView>
    )
}

export default enfp