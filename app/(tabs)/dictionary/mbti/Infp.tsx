import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import Infp from '../../../assets/mbti/infp.png'
import styles from '../styles'

const infp = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>외교관형</Text>
            <Text style={styles.subtitle}>-중재자-</Text>
            <Image
            source={Infp} style={styles.image}
            />
            <Text>항상 선을 행할 준비가 되어 있는 부드럽고 친절한 이타주의자</Text>
        </ScrollView>
    )
}

export default infp