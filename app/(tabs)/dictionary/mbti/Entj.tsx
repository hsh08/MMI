import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Entj from '../../../assets/mbti/entj.png'
import styles from '../styles'

const entj = () => {
    return (
        <ScrollView contentContainerStyle = {{ flexGrow: 1}}>
            <View style={styles.container}>
                <Text style={styles.title}>분석가형</Text>
                <Text style={styles.subtitle}>-통솔자-</Text>
                <Image
                source={Entj} style={styles.image}
                />
                <View style={styles.con}>
                    <Text style={styles.bold}>유형</Text>
                    <Text>항상 문제 해결 방법을 찾아내는 성격으로 대담하고 상상력이 풍부하며 의지가 강력한 지도자</Text>
                    <Text style={styles.bold}>연애</Text>
                    <Text>일에 있어서 리더십을 발휘하는 ENTJ는 연애에 있어서도 리더의 자질을 보입니다. 연인이 고민할 때 빠르게 해결책을 제시하고 싸울 때도 잘잘못을 확실히 따지기 때문입니다. 하지만 단호하고 이성적인 모습이 때론 연인을 가르치려는 것처럼 보여서 불화가 생기기도 합니다. 소유욕이 강한 편이라 상대방을 유혹하는 데 뛰어납니다.</Text>
                    <Text style={styles.bold}>최고의 궁합</Text>
                    <Text>낭만과 로맨틱의 ISFP</Text>
                    <Text style={styles.bold}>최악의 궁합</Text>
                    <Text>과하게 친절한 ISFJ</Text>
                </View>
                
            </View>
            
        </ScrollView>
    )
}

export default entj