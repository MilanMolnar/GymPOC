import AsyncStorage from '@react-native-async-storage/async-storage';



export async function storeData(key:string, value:object) {
    try {
        const jsonValue = JSON.stringify(value);
        const readDatas = await readData(key)
        await AsyncStorage.setItem(key, jsonValue);
        console.log(`stored record with key: ${key} and obj value (stringifyed): ${jsonValue}`)
        console.log(`all data with key: "${key}" value :` + JSON.stringify(readDatas))
      } catch (e) {
        console.log(`Error while storing :${value}` + e)
      }
}


export async function readData(key: string) {
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


export async function updateData(key:string, newObject:object) {
  const originalObj = await readData(key)
  console.log(originalObj + "original obj")
  if (originalObj == null){ //read data returns null if there was no value associated with that key, we just store our new obj
    await storeData(key, newObject)
    console.log(newObject + "new obj")
    return
  }
  const updatedObject = Object.assign(originalObj, newObject) //appending key-value 
  console.log(updatedObject + "updated obj")
  await storeData(key, updatedObject)
  //AsyncStorage.clear() to clear
}