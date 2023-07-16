import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import Intp from '../../../assets/mbti/intp.png'
import styles from '../styles'

const intp = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>분석가형</Text>
            <Text style={styles.subtitle}>-논리술사-</Text>
            <Image
            source={Intp} style={styles.image}
            />
            <Text>지식을 끝없이 갈망하는 혁신적인 발명가</Text>
        </ScrollView>
    )
}

export default intp