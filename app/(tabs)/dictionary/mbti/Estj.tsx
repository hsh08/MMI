import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import Estj from '../../../assets/mbti/estj.png'
import styles from '../styles'

const estj = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>관리자형</Text>
            <Text style={styles.subtitle}>-경영자-</Text>
            <Image
            source={Estj} style={styles.image}
            />
            <Text>사물과 사람을 관리하는 데 뛰어난 능력을 가진 경영자</Text>
        </ScrollView>
    )
}

export default estj