import { Stack } from "expo-router"

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