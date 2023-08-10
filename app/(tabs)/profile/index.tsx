import { Link }  from 'expo-router'
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';
import image from '../../assets/image/profile_image.jpg'

const Proage = () => {
    return (
        <ScrollView style={styles.container}>
                <Text style={styles.bt}>UserName</Text>
                <Text style={styles.tt}>mbti</Text>
                <View style={styles.ob}>
                    <Image
                        style={styles.image}
                        source={image}
                    />
                    <View>
                        <Text style={styles.text}>Posts</Text>
                        <View style={styles.nc}>
                            <Text style={styles.num}>0</Text>
                        </View>
                        <Text style={styles.text}>Follower</Text>
                        <View style={styles.nc}>
                            <Text style={styles.num}>0</Text>
                        </View>
                        <Text style={styles.text}>Follwing</Text>
                        <View style={styles.nc}>
                            <Text style={styles.num}>0</Text>
                        </View>
                    </View>
                    <View style={styles.bc}>
                        <Link href='../profile/edit'>
                            <Text style={styles.btt}>
                                프로필 수정
                            </Text>
                        </Link>
                    </View>
                </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    btt: {
        color: 'white',
        fontWeight: 'bold',
    },
    bc: {
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 100,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'blue',
    },
    num: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    nc: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        right: 0,
    },
    container: {
        flex: 1,
    },
    ob: {
        marginLeft: 10,
        alignItems: 'center',
    },
    image: {
        borderWidth: 1,
        borderColor: 'gray',
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    bt: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        marginLeft: 20,
        paddingBottom: 10,
        fontWeight: 'bold',
    },
    tt: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
})

export default Proage;