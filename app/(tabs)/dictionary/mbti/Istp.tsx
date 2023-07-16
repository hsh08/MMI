import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import Istp from '../../../assets/mbti/istp.png'
import styles from '../styles'

const istp = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>탐험가형</Text>
            <Text style={styles.subtitle}>-장인-</Text>
            <Image
            source={Istp} style={styles.image}
            />
            <Text>대담하면서도 현실적인 성격으로 모든 종류의 도구를 자유자재로 다루는 스타일</Text>
        </ScrollView>
    )
}

export default istp