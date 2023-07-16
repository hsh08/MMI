import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import Estp from '../../../assets/mbti/estp.png'
import styles from '../styles'

const estp = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>탐험가형</Text>
            <Text style={styles.subtitle}>-사업가-</Text>
            <Image
            source={Estp} style={styles.image}
            />
            <Text>위험을 기꺼이 감수하는 성격으로 영리하고 에너지 넘치며 관찰력이 뛰어난 사업가</Text>
        </ScrollView>
    )
}

export default estp