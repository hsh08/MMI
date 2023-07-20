import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import Intj from '../../../assets/mbti/intj.png'
import styles from '../styles'

const intj = () => {
    return (
        <ScrollView contentContainerStyle = {{ flexGrow: 1}}>
            <View style={styles.container}>
                <Text style={styles.title}>분석가형</Text>
                <Text style={styles.subtitle}>-전략가-</Text>
                <Image
                source={Intj} style={styles.image}
                />
                <View style={styles.con}>
                    <Text style={styles.bold}>유형</Text>
                    <Text>모든 일에 대해 계획을 세우며 상상력이 풍부한 전략가</Text>
                    <Text style={styles.bold}>연애</Text>
                    <Text>자신의 감정을 정말 잘 숨깁니다. 분석적이면서 냉철하다는 평가를 받으며 호불호가 강하고 주관이 뚜렷해서 가치관이 맞지 않으면 관심을 갖지 않습니다. 조용하고 깊은 사랑을 추구하는데, 연애 스타일 또한 이슈 없이 무난한 연애를 합니다. 사랑을 시작하기에는 오랜 시간이 걸릴 수 있지만 한번 시작하면 깊은 사랑을 하는 타입입니다.</Text>
                    <Text style={styles.bold}>최고의 궁합</Text>
                    <Text>강아지 스타일의 ENFP</Text>
                    <Text style={styles.bold}>최악의 궁합</Text>
                    <Text>나랑 같은 건 절대 NO INTJ</Text>
                </View>
               
            </View>
            
        </ScrollView>
    )
}

export default intj