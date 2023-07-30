import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Link, useRouter, Stack  } from 'expo-router';

const Home = () =>{
const router = useRouter();

    return (
    <View>    
    <Text style={styles.title_text}>GYM POC</Text>
    <View style={styles.gap} />
    
      <Link style={styles.button} href="/edit">
        <Text style={styles.buttonText}>Szerkesztés</Text>
      </Link>
      <View style={styles.gap} />
      <Link style={styles.button} href="/workout">
        <Text style={styles.buttonText}>Edzés</Text>
      </Link>
      <View style={styles.gap} />
      <Link style={styles.button} href="/overview">
        <Text style={styles.buttonText}>Áttekintés</Text>
      </Link>
    </View>
    )
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    button: {
      backgroundColor: '#007AFF', // You can customize the button color here
      paddingVertical: 20,
      paddingHorizontal: 40,
      borderRadius: 10,
      elevation: 2, // Add elevation for Android shadow
      shadowColor: '#000', // Add shadow for iOS shadow
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    buttonText: {
      color: '#FFF', // You can customize the text color here
      fontSize: 18,
      fontWeight: 'bold',
    },
    title_text:{
      color: '#000', // You can customize the text color here
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    gap: {
      height: 10, // Adjust the gap size as needed
    },
  });

export default Home;