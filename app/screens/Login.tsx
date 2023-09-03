import { View, Text, StyleSheet, ActivityIndicator, Button, KeyboardAvoidingView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, User, initializeAuth, getAuth, getReactNativePersistence, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { app } from '../../FirebaseConfig';
import Home from "../(tabs)/home"
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { Slot } from "expo-router";

// home으로 이동하는 app.tsx의 코드를 여기에 추가

const Stack = createNativeStackNavigator();
const auth = initializeAuth(app, {
  persistence:getReactNativePersistence(ReactNativeAsyncStorage)
});

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth(app);

    useEffect(() => {
        // Firebase Auth의 상태 변화 감지 등록
    
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user); // 로그인 상태
          } else {
            setUser(null); // 로그아웃 상태
          }
          setIsLoading(false); // 로딩 완료
        });
    
        // 컴포넌트가 언마운트될 때 상태 변화 감지 등록 해제
        return () => unsubscribe();
    }, []);
    
    if (isLoading) {
        // 로딩 중이면 로딩 컴포넌트 또는 스플래시 화면 등을 보여줄 수 있습니다.
        return null;
    }

    const signIn = async () => {
        setLoading(true);
        try {
            const  response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error: any) {
            console.log(error);
            alert('Sign in failed: ' + error.message)
        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const  response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Check your emails!');
        } catch (error: any) {
            console.log(error);
            alert('Sign up failed: ' + error.message)
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding'>
                <TextInput value={email} style={styles.input} placeholder="Email" autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
                <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder="password" autoCapitalize='none' onChangeText={(text) => setPassword(text)}></TextInput>
            
                { loading ? (
                    <ActivityIndicator size="large" color="#0000ff"/>
                ) : (
                    <>
                        <Button title='Login' onPress={signIn} />
                        <Button title='Create account' onPress={signUp} />
                    </>
                )}
            </KeyboardAvoidingView>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20, 
        flex: 1, 
        justifyContent: 'center'
    },
    input: {
        marginVertical: 4, 
        height: 50, 
        borderWidth: 1, 
        borderRadius: 4, 
        padding: 10,
        backgroundColor: '#fff'
    }
})