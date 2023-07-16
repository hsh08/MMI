import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import Enfj from '../../../assets/mbti/enfj.png'
import styles from '../styles'

const enfj = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>외교관형</Text>
            <Text style={styles.subtitle}>-선도자-</Text>
            <Image
            source={Enfj} style={styles.image}
            />
            <Text>청중을 사로잡고 의욕을 불어넣는 카리스마 넘치는 지도자</Text>
        </ScrollView>
    )
}

export default enfj