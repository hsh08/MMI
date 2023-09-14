import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Estp from '../../../assets/mbti/estp.png'
import styles from '../styles'
import React from 'react';

const estp = () => {
    return (
        <ScrollView contentContainerStyle = {{ flexGrow: 1}}>
            <View style={styles.container}>
                <Text style={styles.title}>탐험가형</Text>
                <Text style={styles.subtitle}>-사업가-</Text>
                <Image
                source={Estp} style={styles.image}
                />
                <View style={styles.con}>
                    <Text style={styles.bold}>유형</Text>
                    <Text>위험을 기꺼이 감수하는 성격으로 영리하고 에너지 넘치며 관찰력이 뛰어난 사업가</Text>
                    <Text style={styles.bold}>연애</Text>
                    <Text>이상형을 만나면 어마어마한 사교성과 추진력으로 연애까지 빠르게 직진하는 스타일입니다. 남의 눈치를 보지 않고 애정표현이나 스킨십도 적극적으로 하는 편이며, 갈등이 생겨도 피하지 않아 뒤끝이 없습니다. 하지만 자기주장이 강해 충동적일 때가 있으며 원하는 무언가에 꽂히면 불도저 같은 모습을 보이기도 합니다.</Text>
                    <Text style={styles.bold}>최고의 궁합</Text>
                    <Text>Give and Take INFJ</Text>
                    <Text style={styles.bold}>최악의 궁합</Text>
                    <Text>주도권은 나에게 INFP</Text>
                </View>
                
            </View>
            
        </ScrollView>
    )
}

export default estp