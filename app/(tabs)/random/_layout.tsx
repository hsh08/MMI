import { Stack } from "expo-router"
import React from "react";

const DicLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerTitle: 'random'
                }}
            />
        </Stack>
    )
}

export default DicLayout;