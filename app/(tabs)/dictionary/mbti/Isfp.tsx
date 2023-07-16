import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import Isfp from '../../../assets/mbti/isfp.png'
import styles from '../styles'

const isfp = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>탐험가형</Text>
            <Text style={styles.subtitle}>-모험가-</Text>
            <Image
            source={Isfp} style={styles.image}
            />
            <Text>항상 새로운 경험을 추구하는 유연하고 매력 넘치는 예술가</Text>
        </ScrollView>
    )
}

export default isfp