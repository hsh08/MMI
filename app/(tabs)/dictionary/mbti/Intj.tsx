import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import Intj from '../../../assets/mbti/intj.png'
import styles from '../styles'

const intj = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>분석가형</Text>
            <Text style={styles.subtitle}>-전략가-</Text>
            <Image
            source={Intj} style={styles.image}
            />
            <Text>모든 일에 대해 계획을 세우며 상상력이 풍부한 전략가</Text>
        </ScrollView>
    )
}

export default intj