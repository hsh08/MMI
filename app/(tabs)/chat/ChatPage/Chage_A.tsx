import { View, Text, Button, StyleSheet, ScrollView, TextInput, Pressable, TouchableOpacity } from 'react-native';
import React, { useState, useEffect} from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const clientA = new W3CWebSocket('ws://localhost:8080');

const Chage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    clientA.onopen = () => {
      console.log('WebSocket Client A Connected');
    };

    clientA.onerror = function(error) {
      console.log('WebSocket Error: ', error);
    };

    clientA.onmessage = (message) => {
      const data = JSON.parse(message.data.toString());
      setMessage((prevMessage) => `${prevMessage}\n${data.sender}: ${data.text}`);
    };
  }, []);

  const sendMessage = () => {
    const data = {
      sender: 'A',
      receiver: 'B',
      text: message,
    };
    clientA.send(JSON.stringify(data));
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chat</Text>
      </View>
      <View style={styles.messageContainer}>
        {/* Messages will go here */}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={message}
          onChangeText={setMessage}
          style={styles.input}
          placeholder="Type a message"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.button} onPress={sendMessage}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  inputContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderColor: '#ddd',
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
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Chage;