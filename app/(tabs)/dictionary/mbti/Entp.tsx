import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import Entp from '../../../assets/mbti/entp.png'
import styles from '../styles'

const entp = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>분석가형</Text>
            <Text style={styles.subtitle}>-변론가-</Text>
            <Image
            source={Entp} style={styles.image}
            />
            <Text>지적 도전을 즐기는 영리하고 호기심이 많은 사색가</Text>
        </ScrollView>
    )
}

export default entp