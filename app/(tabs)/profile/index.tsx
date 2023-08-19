import { Link }  from 'expo-router'
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';
import image from '../../assets/image/profile_image.jpg'
import Insta from '../../assets/image/Instagram_logo.jpg'

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
                    <View style={styles.secontainer}>
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
                <ScrollView style={styles.line}>
                    <View>
                        <Image
                            style={styles.im}
                            source={Insta}
                        />       
                    </View>
                    <View>
                        <Image
                            style={styles.im}
                            source={Insta}
                        />
                    </View>
                </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    im: {
        width: 170,
        height: 170,
    },
    line: {
        borderTopWidth: 1,
        borderColor: "black",
        flexDirection: 'row',
    },
    secontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
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
        marginBottom: 10,
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
        paddingRight: 10,
    },
    tt: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
})

export default Proage;