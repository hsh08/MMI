import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Infj from '../../../assets/mbti/infj.png'
import styles from '../styles'

const infj = () => {
    return (
        <ScrollView contentContainerStyle = {{ flexGrow: 1}}>
            <View style={styles.container}>
                <Text style={styles.title}>외교관형</Text>
                <Text style={styles.subtitle}>-옹호자-</Text>
                <Image
                source={Infj} style={styles.image}
                />
                <View style={styles.con}>
                    <Text style={styles.bold}>유형</Text>
                    <Text>차분하고 신비한 분위기를 풍기는 성격으로 다른 사람에게 의욕을 불어넣어 주는 이상주의자</Text>
                    <Text style={styles.bold}>연애</Text>
                    <Text>물리적 거리가 가까울수록 애정의 크기도 커집니다. 하지만 표현이 서툴러서 짝사랑과 속앓이를 가장 많이 하는 스타일이기도 합니다. 표정관리를 너무 잘해서 상대가 마음을 전혀 눈치 채지 못할 때도 많습니다. 하지만 연애를 시작하기만 하면 연애를 방해하는 모든 장애물을 다 부수며 상대에게 올인합니다.</Text>
                    <Text style={styles.bold}>최고의 궁합</Text>
                    <Text>사랑의 불도저 ESFP</Text>
                    <Text style={styles.bold}>최악의 궁합</Text>
                    <Text>보이지 않는 벽 ESTJ</Text>
                </View>
                
            </View>
            
        </ScrollView>
    )
}

export default infj