import { Stack } from "expo-router"
import React from "react";

const DicLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerTitle: 'MBTI DICTIONARY'
                }}
            />
        </Stack>
    )
}

export default DicLayout;