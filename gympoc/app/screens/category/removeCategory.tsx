import { StyleSheet, View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import ButtonComponent from '@/components/Button';
import SelectableList from '../../../components/SelectableList';
import { readData, clearAllData } from '@/app/helpers/persistanceHelper';
import { useState, useEffect } from 'react';


export default function RemoveCategoryScreen() {
    const router = useRouter();
    const [categories, setCategories] = useState({});
    const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const handleSelect = (key: string) => {
    setSelectedKey(key);
    console.log('Selected key:', key);
  };
    
    const getCategories = async () => { 
        let categoryObj = await readData("categories");
        const categories = Object.entries(categoryObj).map(([key, value]) => ({ [key]: value }));
        setCategories(categories);
    }
    useEffect( ()=> {
        getCategories()
        }, []);
   

    console.log(JSON.stringify(categories) + "ez")
    return (
        <View style={styles.container}>
            <ButtonComponent title={'Vissza a szerkesztes oldalra'} onPress={() => { router.push('/(tabs)/edit') }} color={'red'} />
            <SelectableList data={categories} onSelect={handleSelect} />
            <Text>Selected Keys: {selectedKey}</Text>
            <ButtonComponent title={'Összes kategória törlése'} onPress={() => { clearAllData() ; router.push('/(tabs)/edit')}} color={'red'}/>

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


