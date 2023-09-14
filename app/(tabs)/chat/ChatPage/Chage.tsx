import { View, Text, Button, StyleSheet, ScrollView, TextInput, Pressable } from 'react-native';
import React from 'react';

const Chage = () => {
    // const webSocket = new WebSocket('ws://localhost:3001');

    // webSocket.onopen = function () {
    //     alert("웹소켓 서버와 연결에 성공했습니다.");
    //   };
    //   webSocket.onmessage = function (event) {
    //     alert(event.data);
    //   };
    //   webSocket.onclose = function () {
    //     alert("웹소켓 서버와 연결이 종료되었습니다.");
    //   };
    //   webSocket.onerror = function (error) {
    //     console.log(error);
    //   };
    //   function sendMessage() {
    //     const inputElement: HTMLInputElement = document.getElementById("message") as HTMLInputElement;
    //     const message: string = inputElement.value;
    //     webSocket.send(message);
    //   }

    return (
        <ScrollView>
            <View style={styles.Gl}>
                <Text style={styles.tt}>Mcaht</Text>
            </View>
            {/* <View>
                <TextInput
                    style={styles.input}
                />
                <Pressable style={styles.button} onPress={sendMessage}>
                    <Text style={styles.tex}>send</Text>
                </Pressable>
            </View> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    // tex: {

    // },
    // button: {

    // },
    // input: {
        
    // },
    Gl: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingBottom: 10,
        paddingTop: 10,
    },
    tt: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default Chage;