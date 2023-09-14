import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Esfp from '../../../assets/mbti/esfp.png'
import styles from '../styles'
import React from 'react';

const esfp = () => {
    return (
        <ScrollView contentContainerStyle = {{ flexGrow: 1}}>
            <View style={styles.container}>
                <Text style={styles.title}>탐험가형</Text>
                <Text style={styles.subtitle}>-연예인-</Text>
                <Image
                source={Esfp} style={styles.image}
                />
                <View style={styles.con}>
                    <Text style={styles.bold}>유형</Text>
                    <Text>즉흥적이고 넘치는 에너지와 열정으로 주변 사람을 즐겁게 하는 스타일</Text>
                    <Text style={styles.bold}>연애</Text>
                    <Text>모든 사람들에게 사랑받는 자유로운 영혼으로 연인에게 무조건적으로 헌신합니다. 이벤트를 자주 기획하기도 하죠. 연인이 인생의 1순위이기 때문에 모든 MBTI를 통틀어 가장 열정적으로 사랑하는 스타일이라고 할 수 있습니다. 그래서인지 이별할 때 미련이 없는 편이기도 합니다.</Text>
                    <Text style={styles.bold}>최고의 궁합</Text>
                    <Text>한번 빠지면 헤어 나오지 못하는 INTJ</Text>
                    <Text style={styles.bold}>최악의 궁합</Text>
                    <Text>쿨을 넘은 무심함 INTP</Text>
                </View>
                
            </View>
            
        </ScrollView>
    )
}

export default esfp