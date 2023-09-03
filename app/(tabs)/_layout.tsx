import { Tabs } from "expo-router"
import React from "react"
import { Slot } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { IconName } from '@expo/vector-icons/build/Icon';


export default () => {
    return (
        <Tabs>
            <Tabs.Screen 
                name="chat" 
                options={{ headerShown: false }}
            />
            <Tabs.Screen 
                name="post" 
                options={{ headerShown: false }}
            />
            <Tabs.Screen 
                name="home" 
                options={
                    {headerShown: false}
                }
            />
            <Tabs.Screen 
                name="dictionary" 
                options={{ headerShown: false }}
            />
            <Tabs.Screen 
                name="profile" 
                options={{ headerShown: false }}
            />
            <Tabs.Screen 
                name="random" 
                options={{ headerShown: false }}
            />
        </Tabs>

        // 사용자가 로그인이 되었는지 안되었는지는 여기에 코드작성
        // 만약 로그인에 문제가 없다면 (tabs)로 화면 전환을 하고, 로그인에 문제가 있다면 Login.tsx 그니깐 Login화면으로 이동되게

    )
}