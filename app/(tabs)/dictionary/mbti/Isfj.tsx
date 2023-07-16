import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import Isfj from '../../../assets/mbti/isfj.png'
import styles from '../styles'

const isfj = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>관리자형</Text>
            <Text style={styles.subtitle}>-수호자-</Text>
            <Image
            source={Isfj} style={styles.image}
            />
            <Text>주변사람을 보호할 준비가 되어 있는 헌신적이고 따뜻한 스타일</Text>
        </ScrollView>
    )
}

export default isfj