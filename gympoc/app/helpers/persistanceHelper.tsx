import AsyncStorage from '@react-native-async-storage/async-storage';



export async function storeData(key:string, value:object) {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
      } catch (e) {
        console.log(`Error while storing :${value}` + e)
      }
}


export async function readData(key:string) {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log(`Error while reading :${key}` + e)
    }
  };



export async function removeData(key:string){
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
        console.log(`Error while deleting :${key}` + e)
    }
    console.log(`${key} Successfully deleted`)
  }