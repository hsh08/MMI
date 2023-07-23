import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Entp from '../../../assets/mbti/entp.png'
import styles from '../styles'

const entp = () => {
    return (
        <ScrollView contentContainerStyle = {{ flexGrow: 1}}>
            <View style={styles.container}>
                <Text style={styles.title}>분석가형</Text>
                <Text style={styles.subtitle}>-변론가-</Text>
                <Image
                source={Entp} style={styles.image}
                />
                <View style={styles.con}>
                    <Text style={styles.bold}>유형</Text>
                    <Text>지적 도전을 즐기는 영리하고 호기심이 많은 사색가</Text>
                    <Text style={styles.bold}>연애</Text>
                    <Text>개인의 시간을 중요시 여기며 자기애가 강한 편입니다. 자존감도 높고 상상력이 풍부해 계획 없이 어디론가 튈 수 있습니다. 호불호가 확실하고 싫증을 빨리 내는 편이라 새로운 핫플이나 액티비티를 함께 찾아다닐 수 있는 사람을 만나면 지루할 틈 없이 다이나믹한 연애를 즐길 수 있습니다. 그래서 매력적이지만 감정적일 거라고 생각하면 큰 오해입니다. 굉장히 논리적인 사고로 팩트를 지적하는 타입입니다.</Text>
                    <Text style={styles.bold}>최고의 궁합</Text>
                    <Text>다 맞춰주는 ISFJ</Text>
                    <Text style={styles.bold}>최악의 궁합</Text>
                    <Text>진심을 꾸준하게 갈구하는 ISFP</Text>
                </View>
                
            </View>
            
        </ScrollView>
    )
}

export default entp