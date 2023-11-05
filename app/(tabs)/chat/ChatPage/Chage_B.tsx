import { View, Text, Button, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect} from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const clientB = new W3CWebSocket('ws://localhost:8080');

const Chage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    clientB.onopen = () => {
      console.log('WebSocket Client B Connected');
    };

    clientB.onerror = function(error) {
      console.log('WebSocket Error: ', error);
    };

    clientB.onmessage = (message) => {
      const data = JSON.parse(message.data.toString());
      setMessages((prevMessages) => [
        ...prevMessages,
        `${data.sender}: ${data.text}`,
      ]);
    };
  }, []);

  return (
  <>
      <View style={styles.header}>
        <Text style={styles.title}>Chat</Text>
      </View>
      <View style={styles.fake}>
        {/* <Text style={styles.ft}>Hi, my name is HanSangHyuk</Text> */}
      </View>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            // value={message}
            // onChangeText={setMessage}
            style={styles.input}
            placeholder="Type a message"
            placeholderTextColor="#888"
          />
          <TouchableOpacity 
          style={styles.button} 
          // onPress={sendMessage}
          >
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
</>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: '#fff',
    elevation: 2,
    marginRight: 15,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A2E43',
    padding: 15,
    borderRadius: 30,
    elevation: 2,
  },
  fake: {
    backgroundColor: "blue",
  },
  ft: {
    color: "white",
    fontSize: 17,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'flex-end',
  },
  header: {
    padding: 15,
    backgroundColor: '#2A2E43',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  messageContainer: {
    flex: 1,
    padding: 10,
  },
  message: {
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  messageText: {
    fontSize: 16,
  },
});

export default Chage;
