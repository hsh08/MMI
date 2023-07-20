import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import Istp from '../../../assets/mbti/istp.png'
import styles from '../styles'

const istp = () => {
    return (
        <ScrollView contentContainerStyle = {{ flexGrow: 1}}>
            <View style={styles.container}>
                <Text style={styles.title}>탐험가형</Text>
                <Text style={styles.subtitle}>-장인-</Text>
                <Image
                source={Istp} style={styles.image}
                />
                <View style={styles.con}>
                    <Text style={styles.bold}>유형</Text>
                    <Text>대담하면서도 현실적인 성격으로 모든 종류의 도구를 자유자재로 다루는 스타일</Text>
                    <Text style={styles.bold}>연애</Text>
                    <Text>자신만의 기준이 합리적이면서 명확합니다. 연애할 때도 저돌적인 스타일이 아닌 선을 지키면서 단계를 밟아가는 사랑을 추구합니다. 사생활을 중요시 여기며 혼자 있는 시간이 부족하다고 여길 경우 스트레스를 받습니다. 애정표현은 다소 소극적인 편이라 좋아하는 사람이 생겨도 티가 잘 안 납니다.</Text>
                    <Text style={styles.bold}>최고의 궁합</Text>
                    <Text>감정의 신뢰가 가장 높은 ESFJ</Text>
                    <Text style={styles.bold}>최악의 궁합</Text>
                    <Text>통제 불능 자유로운 ESFP</Text>
                </View>
                
            </View>
            
        </ScrollView>
    )
}

export default istp