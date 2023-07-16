import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import Esfj from '../../../assets/mbti/esfj.png'
import styles from '../styles'

const esfj = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>관리자형</Text>
            <Text style={styles.subtitle}>-집정관-</Text>
            <Image
            source={Esfj} style={styles.image}
            />
            <Text>배려심이 넘치고 항상 다른 사람을 도울 준비가 되어 있는 성격으로 인기가 많고 사교성 높은 마당발</Text>
        </ScrollView>
    )
}

export default esfj