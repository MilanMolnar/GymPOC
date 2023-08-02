import { StyleSheet, View, Text } from 'react-native';
import NavigationButtonComponent from '../../components/NavigationButton';


export default function WorkOutScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.buttonPadding}>
                <NavigationButtonComponent color={'green'} title={'Kategoria hozzaadasa'} route={"/screens/category/addCategory"}></NavigationButtonComponent>
            </View>

            <View style={styles.buttonPadding}>
                <NavigationButtonComponent color={'green'} title={'Gyakorlat hozzaadasa'} route={"/screens/exercise/addExercise"}></NavigationButtonComponent>
            </View>

            <View style={styles.buttonPadding}>
                <NavigationButtonComponent color={'red'} title={'Kategoria torlese'} route={"/screens/category/removeCategory"}></NavigationButtonComponent>
            </View>
            <View style={styles.buttonPadding}>
                <NavigationButtonComponent color={'red'} title={'Gyakorlat torlese'} route={"/screens/exercise/removeExercise"}></NavigationButtonComponent>
            </View>
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
        paddingVertical: 25
    }
});
