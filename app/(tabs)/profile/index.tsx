import { Link }  from 'expo-router'
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import image from '../../assets/image/profile_image.jpg'
import heart from '../../assets/image/heart.jpg'

const Proage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <ScrollView style={styles.container}>
                <Text style={styles.bt}>{user ? user.username : 'Loading...'}</Text>
                <Text style={styles.tt}>{user ? user.mbti : 'Loading...'}</Text>
                <View style={styles.ob}>
                    <Image
                        style={styles.image}
                        source={image}
                    />
                    <View style={styles.secontainer}>
                        <Text style={styles.text}>Posts</Text>
                        <View style={styles.nc}>
                            <Text style={styles.num}>2</Text>
                        </View>
                    </View>
                </View>
                <ScrollView style={styles.line}>
                    <View>
                        <Image
                            style={styles.im}
                            source={image}
                        />       
                    </View>
                    <View>
                        <Image
                            style={styles.im}
                            source={heart}
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
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    btt: {
        color: 'white',
        fontWeight: 'bold',
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
        color: 'blue',
    },
})

export default Proage;