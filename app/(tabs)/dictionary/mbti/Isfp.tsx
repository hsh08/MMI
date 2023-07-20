import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import Isfp from '../../../assets/mbti/isfp.png'
import styles from '../styles'

const isfp = () => {
    return (
        <ScrollView contentContainerStyle = {{ flexGrow: 1}}>
            <View style={styles.container}>
                <Text style={styles.title}>탐험가형</Text>
                <Text style={styles.subtitle}>-모험가-</Text>
                <Image
                source={Isfp} style={styles.image}
                />
                <View style={styles.con}>
                    <Text style={styles.bold}>유형</Text>
                    <Text>항상 새로운 경험을 추구하는 유연하고 매력 넘치는 예술가</Text>
                    <Text style={styles.bold}>연애</Text>
                    <Text>평소에는 연애에 관심이 없습니다. 그렇기에 사랑에 빠지기 전까지 엄청나게 신중한 태도를 고집합니다. 이러한 과정을 거쳐서 연애를 하기 때문에 진심을 받는 것을 좋아합니다. 공감력이 뛰어나 상대방의 취향까지 존중해주고 잘 맞춰주며 긍정 에너지를 전파하는 ISFP는 간혹 자신에게 소홀해질 때도 있으니 이 점을 주의하시길 바랍니다.</Text>
                    <Text style={styles.bold}>최고의 궁합</Text>
                    <Text>엄청난 결단력 ENTJ</Text>
                    <Text style={styles.bold}>최악의 궁합</Text>
                    <Text>자기애가 강력한 ENTP</Text>
                </View>
                
            </View>
            
        </ScrollView>
    )
}

export default isfp