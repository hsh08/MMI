import { Link }  from 'expo-router'
import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const DicPage = () => {
    return (
        <ScrollView contentContainerStyle = {{ flexGrow: 1}}>
            <View style={styles.all}>
                <Link href= "/dictionary/mbti/Intp"style={styles.button}>
                    <Text>
                        INTP
                    </Text>
                </Link>
                <Link href= "/dictionary/mbti/Intj"style={styles.button}>
                    <Text>
                        INTJ
                    </Text>
                </Link>
                <Link href= "/dictionary/mbti/Infp"style={styles.button}>
                    <Text>
                        INFP
                    </Text>
                </Link>
                <Link href= "/dictionary/mbti/Infj"style={styles.button}>
                    <Text>
                        INFJ
                    </Text>
                </Link>
                <Link href= "/dictionary/mbti/Istp"style={styles.button}>
                    <Text>
                        ISTP
                    </Text>
                </Link>
                <Link href= "/dictionary/mbti/Istj"style={styles.button}>
                    <Text>
                        ISTJ
                    </Text>
                </Link>
                <Link href= "/dictionary/mbti/Isfp"style={styles.button}>
                    <Text>
                        ISFP
                    </Text>
                </Link>
                <Link href= "/dictionary/mbti/Isfj"style={styles.button}>
                    <Text>
                        ISFJ
                    </Text>
                </Link>
                <Link href= "/dictionary/mbti/Entp"style={styles.button}>
                    <Text>
                        ENTP
                    </Text>
                </Link>
                <Link href= "/dictionary/mbti/Entj"style={styles.button}>
                    <Text>
                        ENTJ
                    </Text>
                </Link>
                <Link href= "/dictionary/mbti/Enfp"style={styles.button}>
                    <Text>
                        ENFP
                    </Text>
                </Link>
                <Link href= "/dictionary/mbti/Enfj"style={styles.button}>
                    <Text>
                        ENFJ
                    </Text>
                </Link>
                <Link href= "/dictionary/mbti/Estp"style={styles.button}>
                    <Text>
                        ESTP
                    </Text>
                </Link>
                <Link href= "/dictionary/mbti/Entj"style={styles.button}>
                    <Text>
                        ENTJ
                    </Text>
                </Link>
                <Link href= "/dictionary/mbti/Esfp"style={styles.button}>
                    <Text>
                        ESFP
                    </Text>
                </Link>
                <Link href= "/dictionary/mbti/Esfj"style={styles.button}>
                    <Text>
                        ESFJ
                    </Text>
                </Link>  
            </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    button: {
        color: 'blue',
        fontSize: 30,
        textAlign: 'center',
        paddingTop: 30,
        width: '50%',
        aspectRatio:'1 / 1',
        alignItems:'center',
        backgroundColor: 'lightpink',
    },
    all: {
        flex:1,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection:"row",
        flexWrap:'wrap'
    }
})
export default DicPage;