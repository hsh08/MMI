import { Stack } from "expo-router"

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