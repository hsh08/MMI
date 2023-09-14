import { Stack } from "expo-router"
import React from "react";

const OneLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerTitle: 'Posting'
                }}
            />
        </Stack>
    )
}

export default OneLayout;