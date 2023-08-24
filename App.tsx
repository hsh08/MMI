import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './app/screens/Login';
import React, { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";
import HomeScreen from './app/(tabs)/home/index';

const Stack = createNativeStackNavigator();

const App = () => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Firebase Auth 상태 변화 감지
  useEffect(() => {
    // Firebase Auth의 상태 변화 감지 등록
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
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

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                { user ? ( 
                    <Stack.Screen name="Home" component={HomeScreen} />
                ) : (
                    <Stack.Screen name="Login" component={Login} />
            )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
