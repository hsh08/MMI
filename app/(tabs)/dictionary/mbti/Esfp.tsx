import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import Esfp from '../../../assets/mbti/esfp.png'
import styles from '../styles'

const esfp = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>탐험가형</Text>
            <Text style={styles.subtitle}>-연예인-</Text>
            <Image
            source={Esfp} style={styles.image}
            />
            <Text>즉흥적이고 넘치는 에너지와 열정으로 주변 사람을 즐겁게 하는 스타일</Text>
        </ScrollView>
    )
}

export default esfp