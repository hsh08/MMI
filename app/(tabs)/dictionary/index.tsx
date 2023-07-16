import { Link, Stack}  from 'expo-router'
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const DicPage = () => {
    return (
        <ScrollView style={styles.all}>
            {/* <Button
                title='INTP'
                // onPress={}  intp로 이동시키고 싶다!
            /> */}
            <Link href= "/dictionary/mbti/Intp"style={styles.button}>INTP</Link>
            {/* <Button
                title='INTJ'
                onPress={} intj로 이동시키고 싶다!
            /> */}
            <Link href= "/dictionary/mbti/Intj"style={styles.button}>INTJ</Link>
            {/* <Button
                title='INFP'
                // onPress={}  infp로 이동시키고 싶다!
            /> */}
            <Link href= "/dictionary/mbti/Infp"style={styles.button}>INFP</Link>
            {/* <Button
                title='INFJ'
                // onPress={}  infj로 이동시키고 싶다!
            /> */}
            <Link href= "/dictionary/mbti/Infj"style={styles.button}>INFJ</Link>
            {/* <Button
                title='ISTP'
                // onPress={}  istp로 이동시키고 싶다!
            /> */}
            <Link href= "/dictionary/mbti/Istp"style={styles.button}>ISTP</Link>
            {/* <Button
                title='ISTJ'
                // onPress={}  istj로 이동시키고 싶다!
            /> */}
            <Link href= "/dictionary/mbti/Istj"style={styles.button}>ISTJ</Link>
            {/* <Button
                title='ISFP'
                // onPress={}  isfp로 이동시키고 싶다!
            /> */}
            <Link href= "/dictionary/mbti/Isfp"style={styles.button}>ISFP</Link>
            {/* <Button
                title='ISFJ'
                // onPress={}  isfj로 이동시키고 싶다!
            /> */}
            <Link href= "/dictionary/mbti/Isfj"style={styles.button}>ISFJ</Link>
            {/* <Button
                title='ENTP'
                // onPress={}  entp로 이동시키고 싶다!
            /> */}
            <Link href= "/dictionary/mbti/Entp"style={styles.button}>ENTP</Link>
            {/* <Button
                title='ENTJ'
                // onPress={}  entj로 이동시키고 싶다!
            /> */}
            <Link href= "/dictionary/mbti/Entj"style={styles.button}>ENTJ</Link>
            {/* <Button
                title='ENFP'
                // onPress={}  enfp로 이동시키고 싶다!
            /> */}
            <Link href= "/dictionary/mbti/Enfp"style={styles.button}>ENFP</Link>
            {/* <Button
                title='ENFJ'
                // onPress={}  enfj로 이동시키고 싶다!
            /> */}
            <Link href= "/dictionary/mbti/Enfj"style={styles.button}>ENFJ</Link>
            {/* <Button
                title='ESTP'
                // onPress={}  estp로 이동시키고 싶다!
            /> */}
            <Link href= "/dictionary/mbti/Estp"style={styles.button}>ESTP</Link>
            {/* <Button
                title='ESTJ'
                // onPress={}  estj로 이동시키고 싶다!
            /> */}
            <Link href= "/dictionary/mbti/Entj"style={styles.button}>ENTJ</Link>
            {/* <Button
                title='ESFP'
                // onPress={}  esfp로 이동시키고 싶다!
            /> */}
            <Link href= "/dictionary/mbti/Esfp"style={styles.button}>ESFP</Link>
            {/* <Button
                title='ESFJ'
                // onPress={}  esfj로 이동시키고 싶다!
            /> */}
            <Link href= "/dictionary/mbti/Esfj"style={styles.button}>ESFJ</Link>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    button: {
        color: 'blue',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        width: 100 ,
        height: 100 ,
        backgroundColor: 'gray' ,
    },
    all: {
        backgroundColor: 'gold',
    }
})
export default DicPage;