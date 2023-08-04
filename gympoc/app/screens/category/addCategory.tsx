import { StyleSheet, View, Text, TextInput} from 'react-native';
import { useRouter } from 'expo-router';
import ButtonComponent from '../../../components/Button';
import {readData, storeData, removeData} from "../../helpers/persistanceHelper"
import React from 'react';



export default function AddCategoryScreen() {

   
    const [text, onChangeText] = React.useState("");

    const router = useRouter();

    return (
        <View style={styles.container}>
            <ButtonComponent title={'Vissza a szerkesztes oldalra'} onPress={() => { router.push('/(tabs)/edit') } } color={'red'}/>

            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Kategoria neve:"
            />

            <ButtonComponent title={'Kategória mentése'} onPress={() => { storeData(text, {"exercises": []}); router.push('/(tabs)/edit')} } color={'green'}/>

        </View>
        
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
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
        paddingVertical: 20
    }
});
