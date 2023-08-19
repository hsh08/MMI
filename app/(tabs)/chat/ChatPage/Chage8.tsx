import { Link, Stack}  from 'expo-router'
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const Chage = () => {
    return (
        <ScrollView>
            <View style={styles.Gl}>
                <Text style={styles.tt}>Mcaht</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Gl: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingBottom: 10,
        paddingTop: 10,
    },
    tt: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default Chage;