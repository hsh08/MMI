import { Stack } from "expo-router"

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