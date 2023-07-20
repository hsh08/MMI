import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import Enfp from '../../../assets/mbti/enfp.png'
import styles from '../styles'

const enfp = () => {
    return (
        <ScrollView contentContainerStyle = {{ flexGrow: 1}}>
            <View style={styles.container}>
                <Text style={styles.title}>외교관형</Text>
                <Text style={styles.subtitle}>-활동가-</Text>
                <Image
                source={Enfp} style={styles.image}
                />
                <View style={styles.con}>
                    <Text style={styles.bold}>유형</Text>
                    <Text>열정적이고 창의적인 성격으로 긍정적으로 삶을 바라보는 사교적이면서도 자유로운 영혼</Text>
                    <Text style={styles.bold}>연애</Text>
                    <Text>연인과 함께라면 언제, 어떤 상황이라도 OK인 낭만적인 사람입니다. 한번 사랑에 빠지면 화끈하게 올인하는데요. 상대방에게 헌신적인 연애를 할 가능성이 높기에 상대방 위주로 연애를 할 것이라고 오해하지만, 연인을 사랑하는 만큼 자기 자신도 사랑하기에 크게 휘둘리지 않는 편입니다.</Text>
                    <Text style={styles.bold}>최고의 궁합</Text>
                    <Text>다정하게 컨트롤 해주는 INFJ</Text>
                    <Text style={styles.bold}>최악의 궁합</Text>
                    <Text>성실의 끝판왕 ISFJ</Text>
                </View>
                
            </View>
            
        </ScrollView>
    )
}

export default enfp