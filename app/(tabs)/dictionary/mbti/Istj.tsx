import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import Istj from '../../../assets/mbti/istj.png'
import styles from '../styles'

const istj = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>관리자형</Text>
            <Text style={styles.subtitle}>-현실주의자-</Text>
            <Image
            source={Istj} style={styles.image}
            />
            <Text>사상을 중시하는 믿음직한 현실주의자</Text>
        </ScrollView>
    )
}

export default istj