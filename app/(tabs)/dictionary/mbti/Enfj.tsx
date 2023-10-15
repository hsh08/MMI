import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Enfj from '../../../assets/mbti/enfj.png'
import styles from '../styles'

const enfj = () => {
    return (
        <ScrollView contentContainerStyle = {{ flexGrow: 1}}>
            <View style={styles.container}>
                <Text style={styles.title}>외교관형</Text>
                <Text style={styles.subtitle}>-선도자-</Text>
                <View style={styles.vi}>
                    <Image
                        source={Enfj} style={styles.image}
                    />
                </View>
                <View style={styles.con}>
                    <Text style={styles.bold}>유형</Text>
                    <Text>청중을 사로잡고 의욕을 불어넣는 카리스마 넘치는 지도자</Text>
                    <Text style={styles.bold}>연애</Text>
                    <Text>눈치가 빨라 연인의 감정을 잘 캐치하고 연인의 장점을 알아보고 응원해주는 데 능숙해서 든든한 지원군 역할을 해줍니다. 그러나 상처를 주는 것에도, 받는 것에도 부정적인 편이라 문제가 생긴다면 문제의 골이 깊어집니다. 모든 사람들에게 다정하다고 느낄 수 있지만, 내 사람에 대한 애정은 확실합니다.</Text>
                    <Text style={styles.bold}>최고의 궁합</Text>
                    <Text>질문폭격기 ISTP</Text>
                    <Text style={styles.bold}>최악의 궁합</Text>
                    <Text>신중해서 알 수 없는 ISTJ</Text>
                </View>
                
            </View>
        </ScrollView>
    )
}

export default enfj