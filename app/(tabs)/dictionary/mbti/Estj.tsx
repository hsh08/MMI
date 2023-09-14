import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Estj from '../../../assets/mbti/estj.png'
import styles from '../styles'
import React from 'react';

const estj = () => {
    return (
        <ScrollView contentContainerStyle = {{ flexGrow: 1}}>
            <View style={styles.container}>
                <Text style={styles.title}>관리자형</Text>
                <Text style={styles.subtitle}>-경영자-</Text>
                <Image
                source={Estj} style={styles.image}
                />
                <View style={styles.con}>
                    <Text style={styles.bold}>유형</Text>
                    <Text>사물과 사람을 관리하는 데 뛰어난 능력을 가진 경영자</Text>
                    <Text style={styles.bold}>연애</Text>
                    <Text>경제적, 시간적인 개념 등 모든 면에서 계획적인 성향을 가진 철저한 스타일입니다. 밀당이라고는 전혀 모르며 선비 같다는 말을 종종 듣습니다. 책임감이 강해서 약속을 반드시 지키기 때문에 연인에게 금방 신뢰를 얻기도 합니다. 연애도 사랑도 열심히 학습하는 노력파이기에 시간이 지날수록 애정표현은 점점 좋아질 겁니다.</Text>
                    <Text style={styles.bold}>최고의 궁합</Text>
                    <Text>통통 튀는 매력의 INFP</Text>
                    <Text style={styles.bold}>최악의 궁합</Text>
                    <Text>절대 먼저 오지 않는 INFJ</Text>
                </View>
                
            </View>
            
        </ScrollView>
    )
}

export default estj