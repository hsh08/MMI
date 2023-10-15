import { Stack } from "expo-router"
import React from "react";

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerTitle: 'Chating'
                }}
            />
        </Stack>
    )
}

export default StackLayout;