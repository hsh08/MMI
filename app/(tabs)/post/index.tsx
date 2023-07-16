import { Link, Stack}  from 'expo-router'
import { View,
        Image,
        StyleSheet,
} from 'react-native';
import insta from "../../assets/image/mark_elon.jpg";

const PostPage = () => {
    return (
        <View>
            <Image
            source={insta} style={styles.image}
            />
        </View>
    
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%' ,
        height: 300 ,
    },
});

export default PostPage