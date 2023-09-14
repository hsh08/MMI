import { Tabs } from "expo-router"
import React from "react"

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

    )
}