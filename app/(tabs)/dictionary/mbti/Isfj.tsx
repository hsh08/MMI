import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Isfj from '../../../assets/mbti/isfj.png'
import styles from '../styles'
import React from 'react';

const isfj = () => {
    return (
        <ScrollView contentContainerStyle = {{ flexGrow: 1}}>
            <View style={styles.container}>
                <Text style={styles.title}>관리자형</Text>
                <Text style={styles.subtitle}>-수호자-</Text>
                <View>
                   <Image
                        source={Isfj} style={styles.image}
                    /> 
                </View>
                <View style={styles.con}>
                    <Text style={styles.bold}>유형</Text>
                    <Text>주변사람을 보호할 준비가 되어 있는 헌신적이고 따뜻한 스타일</Text>
                    <Text style={styles.bold}>연애</Text>
                    <Text>나의 노력을 존중해주고 진심으로 감사할 줄 아는 사람을 만나면 오랜 기간 연애를 합니다. 평화의 수호신이라고 이야기할 수 있을 정도로 어떤 일이 있더라도 잘 참으면서 맞춰줍니다. 누구보다 아낌 없이 사랑을 주는 만큼 때때로 상대의 사랑을 확인받고 싶어 하기도 합니다.</Text>
                    <Text style={styles.bold}>최고의 궁합</Text>
                    <Text>통통 튀는 매력의 ESTP</Text>
                    <Text style={styles.bold}>최악의 궁합</Text>
                    <Text>과한 에너자이저 ENFP</Text>
                </View>
                
            </View>
            
        </ScrollView>
    )
}

export default isfj