import { Tabs } from "expo-router"

export default () => {
    return (
        <Tabs>
            <Tabs.Screen name="post" options={{ headerShown: false }}/>
            <Tabs.Screen name="home" options={{ headerShown: false }}/>
            <Tabs.Screen name="dictionary" options={{ headerShown: false }}/>
        </Tabs>
    )
}