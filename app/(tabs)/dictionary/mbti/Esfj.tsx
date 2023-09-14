import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Esfj from '../../../assets/mbti/esfj.png'
import styles from '../styles'
import React from 'react';

const esfj = () => {
    return (
        <ScrollView contentContainerStyle = {{ flexGrow: 1}}>
            <View style={styles.container}>
                <Text style={styles.title}>관리자형</Text>
                <Text style={styles.subtitle}>-집정관-</Text>
                <Image
                source={Esfj} style={styles.image}
                />
                <View style={styles.con}>
                    <Text style={styles.bold}>유형</Text>  
                    <Text>배려심이 넘치고 항상 다른 사람을 도울 준비가 되어 있는 성격으로 인기가 많고 사교성 높은 마당발</Text>
                    <Text style={styles.bold}>연애</Text>
                    <Text>누구에게나 친절하기에 상대방은 간혹 이것이 관심인지 원래 본인의 성격인지 헷갈리고는 합니다. 연인의 감정을 잘 읽고 맞춰주기에 연애할 때 갈등이 적습니다. 하지만 속마음은 연인의 행동에 간섭하고 싶어 합니다. 그저 갈등을 만들고 싶지 않아서 불만을 속에 쌓아두는 것뿐입니다.</Text>
                    <Text style={styles.bold}>최고의 궁합</Text>
                    <Text>연애의 재미를 즐기는 INTP</Text>
                    <Text style={styles.bold}>최악의 궁합</Text>
                    <Text>내가(나만) 바로 리더다 ENTJ</Text>
                </View>
                
            </View>
            
        </ScrollView>
    )
}

export default esfj