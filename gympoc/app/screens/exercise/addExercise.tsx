import { StyleSheet, View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import ButtonComponent from '../../../components/Button';

export default function AddExerciseScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <ButtonComponent title={'Vissza a szerkesztes oldalra'} onPress={() => { router.push('/(tabs)/edit') }} color={'red'} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonPadding: {
        paddingVertical: 10
    }
});
