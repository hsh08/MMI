import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import Intp from '../../../assets/mbti/intp.png'
import styles from '../styles'

const intp = () => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.title}>분석가형</Text>
                <Text style={styles.subtitle}>-논리술사-</Text>
                <Image
                source={Intp} style={styles.image}
                />
                <View style={styles.con}>
                    <Text style={styles.bold}>유형</Text>
                    <Text>지식을 끝없이 갈망하는 혁신적인 발명가</Text>
                    <Text style={styles.bold}>연애</Text>
                    <Text>귀찮은 것을 싫어하고 선을 넘는 것도 싫어합니다. 한편으로는 솔직하다고 볼 수 있지만 또 다른 편으로는 무심하다고 느낄 수 있습니다. 기존의 연애방식을 거부하고 나만의 연애를 만들어가며 그렇기에 유니크하고 특별한 연애를 하는 경우가 많습니다. 상대의 외모나 조건보다 사고방식, 대화 스타일이 나와 잘 맞는지가 중요합니다.</Text>
                    <Text style={styles.bold}>최고의 궁합</Text>
                    <Text>무심해도 이해해주는 ENFJ</Text>
                    <Text style={styles.bold}>최악의 궁합</Text>
                    <Text>계속된 감정의 요구 INFJ</Text>
                </View>
                
            </View>
            
        </ScrollView>
    )
}

export default intp