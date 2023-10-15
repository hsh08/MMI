import { Tabs } from "expo-router"
import React from "react"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default () => {
    return (
        <Tabs>
            <Tabs.Screen 
                name="dictionary" 
                options={{ 
                    tabBarIcon: ({color, size}) => (
                        <Entypo name="book" size={24} color="black" />
                    ),
                    headerShown: false,
                    tabBarLabel: "" // 이름을 비워줍니다.
                }}
            />
            <Tabs.Screen
                name="post"
                options={{ 
                    tabBarIcon: ({color, size}) => (
                        <AntDesign name="pluscircle" size={24} color="black" />
                    ),
                    headerShown: false,
                    tabBarLabel: "" // 이름을 비워줍니다.
                }}
            />
            <Tabs.Screen 
                name="home" 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Entypo name="home" size={24} color="black" />
                    ),
                    headerShown: false,
                    tabBarLabel: "" // 이름을 비워줍니다.
                }}
            />
            <Tabs.Screen 
                name="random" 
                options={{ 
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name="dice" size={24} color="black" />
                    ),
                    headerShown: false,
                    tabBarLabel: "" // 이름을 비워줍니다.
                }}
            />
            <Tabs.Screen 
                name="chat" 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Entypo name="chat" size={24} color="black" />
                    ),
                    headerShown: false,
                    tabBarLabel: "" // 이름을 비워줍니다.
                }}
            />
            <Tabs.Screen 
                name="profile" 
                options={{ 
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="person-circle-sharp" size={24} color="black" />
                    ),
                    headerShown: false,
                    tabBarLabel: "" // 이름을 비워줍니다.
                }}
            />
        </Tabs>

    )
}