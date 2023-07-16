import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import Entj from '../../../assets/mbti/entj.png'
import styles from '../styles'

const entj = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>분석가형</Text>
            <Text style={styles.subtitle}>-통솔자-</Text>
            <Image
            source={Entj} style={styles.image}
            />
            <Text>항상 문제 해결 방법을 찾아내는 성격으로 대담하고 상상력이 풍부하며 의지가 강력한 지도자</Text>
        </ScrollView>
    )
}

export default entj