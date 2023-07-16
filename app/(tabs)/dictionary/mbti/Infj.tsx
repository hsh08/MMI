import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import Infj from '../../../assets/mbti/infj.png'
import styles from '../styles'

const infj = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>외교관형</Text>
            <Text style={styles.subtitle}>-옹호자-</Text>
            <Image
            source={Infj} style={styles.image}
            />
            <Text>차분하고 신비한 분위기를 풍기는 성격으로 다른 사람에게 의욕을 불어넣어 주는 이상주의자</Text>
        </ScrollView>
    )
}

export default infj