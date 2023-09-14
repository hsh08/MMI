import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Infp from '../../../assets/mbti/infp.png'
import styles from '../styles'
import React from 'react';

const infp = () => {
    return (
        <ScrollView contentContainerStyle = {{ flexGrow: 1}}>
            <View style={styles.container}>
                <Text style={styles.title}>외교관형</Text>
                <Text style={styles.subtitle}>-중재자-</Text>
                <Image
                source={Infp} style={styles.image}
                />
                <View style={styles.con}>
                    <Text style={styles.bold}>유형</Text>
                    <Text>항상 선을 행할 준비가 되어 있는 부드럽고 친절한 이타주의자</Text>
                    <Text style={styles.bold}>연애</Text>
                    <Text>언제나 로맨틱한 영화 같은 사랑을 꿈꾸고 있는 INFP. 연애를 시작함과 동시에 앞으로 행복할 일, 싸울 일, 우울할 일을 미리 상상하고 기뻐하며 걱정하는 스타일입니다. 사귀기 전에는 벽을 치지만, 사귄 후에는 언제 그랬냐는 듯이 애정표현을 적극적으로 합니다.</Text>
                    <Text style={styles.bold}>최고의 궁합</Text>
                    <Text>진솔한 대화가 통하는 ISFP</Text>
                    <Text style={styles.bold}>최악의 궁합</Text>
                    <Text>사랑의 불도저 ESFP</Text>
                </View>
                
            </View>
            
        </ScrollView>
    )
}

export default infp