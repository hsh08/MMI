import { Link, Stack}  from 'expo-router'
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const DicPage = () => {
    return (
        <ScrollView contentContainerStyle = {{ flexGrow: 1}}>
            <View style={styles.all}>
                <Link href= "/dictionary/mbti/Intp"style={styles.button}>INTP</Link>
                <Link href= "/dictionary/mbti/Intj"style={styles.button}>INTJ</Link>
                <Link href= "/dictionary/mbti/Infp"style={styles.button}>INFP</Link>
                <Link href= "/dictionary/mbti/Infj"style={styles.button}>INFJ</Link>
                <Link href= "/dictionary/mbti/Istp"style={styles.button}>ISTP</Link>
                <Link href= "/dictionary/mbti/Istj"style={styles.button}>ISTJ</Link>
                <Link href= "/dictionary/mbti/Isfp"style={styles.button}>ISFP</Link>
                <Link href= "/dictionary/mbti/Isfj"style={styles.button}>ISFJ</Link>
                <Link href= "/dictionary/mbti/Entp"style={styles.button}>ENTP</Link>
                <Link href= "/dictionary/mbti/Entj"style={styles.button}>ENTJ</Link>
                <Link href= "/dictionary/mbti/Enfp"style={styles.button}>ENFP</Link>
                <Link href= "/dictionary/mbti/Enfj"style={styles.button}>ENFJ</Link>
                <Link href= "/dictionary/mbti/Estp"style={styles.button}>ESTP</Link>
                <Link href= "/dictionary/mbti/Entj"style={styles.button}>ENTJ</Link>
                <Link href= "/dictionary/mbti/Esfp"style={styles.button}>ESFP</Link>
                <Link href= "/dictionary/mbti/Esfj"style={styles.button}>ESFJ</Link>  
            </View>
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
        paddingTop: 30,
        width: 100 ,
        height: 100 ,
        // backgroundColor: 'mintcream' ,
        backgroundColor: 'lightpink',
    },
    all: {
        // backgroundColor: 'limegreen',
        backgroundColor: 'white',
        alignItems: 'center',
    }
})
export default DicPage;