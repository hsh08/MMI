import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Slot } from "expo-router";

const App = () => {
    return (
        <NavigationContainer>
            <Slot />
            {/* <Stack.Navigator initialRouteName="Login">
                { user ? ( 
                    <Stack.Screen name="Home" component={HomeScreen} />
                ) : (
                    <Stack.Screen name="Login" component={Login} />
            )}
            </Stack.Navigator> */}
        </NavigationContainer>
    )
}

export default App
