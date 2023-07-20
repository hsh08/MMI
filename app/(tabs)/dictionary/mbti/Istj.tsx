import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import Istj from '../../../assets/mbti/istj.png'
import styles from '../styles'

const istj = () => {
    return (
        <ScrollView contentContainerStyle = {{ flexGrow: 1}}>
            <View style={styles.container}>
                <Text style={styles.title}>관리자형</Text>
                <Text style={styles.subtitle}>-현실주의자-</Text>
                <Image
                source={Istj} style={styles.image}
                />
                <View style={styles.con}>
                    <Text style={styles.bold}>유형</Text>
                    <Text>사상을 중시하는 믿음직한 현실주의자</Text>
                    <Text style={styles.bold}>연애</Text>
                    <Text>꼼꼼하고 철두철미하며 감정표현도 서툴지만 내적 사랑이 가득한 스타일입니다. 연애도 나만의 원칙에 맞게 계획적으로 차근차근 진행하기 때문에 시작이 다소 느릴 수 있습니다. 그 때문에 주변에서 연애를 하는지도 모르는 경우가 있기도 합니다. 신중하다 보니 본인 감정에 대한 선을 잘 지키고, 이로 인해 연애 기간이 긴 편입니다.</Text>
                    <Text style={styles.bold}>최고의 궁합</Text>
                    <Text>해피 바이러스 ENFP</Text>
                    <Text style={styles.bold}>최악의 궁합</Text>
                    <Text>자꾸만 한숨이 튀어나오는 INFP</Text>
                </View>
                
            </View>
            
        </ScrollView>
    )
}

export default istj