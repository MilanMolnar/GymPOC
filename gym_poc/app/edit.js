import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Link, useRouter, Stack  } from 'expo-router';

const Edit = () =>{
    return (     
    <View>
      <Link style={styles.button_add} href="/editscreen/add_category">
        <Text style={styles.buttonText}>Kategória Hozzáadása</Text>
      </Link>
      <View style={styles.gap} />
      <Link style={styles.button_add} href="/editscreen/add_exercise">
        <Text style={styles.buttonText}>Gyakorlat Hozzáadása</Text>
      </Link>
      <View style={styles.gap_middle} />
      <Link style={styles.button_delete} href="/editscreen/delete_category">
        <Text style={styles.buttonText}>Kategória Törlése</Text>
      </Link>
      <View style={styles.gap} />
      <Link style={styles.button_delete} href="/editscreen/delete_exercise">
        <Text style={styles.buttonText}>Gyakorlat Törlése</Text>
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
    button_add: {
      backgroundColor: '#ADDFB3', // You can customize the button color here
      paddingVertical: 20,
      paddingHorizontal: 40,
      borderRadius: 10,
      elevation: 2, // Add elevation for Android shadow
      shadowColor: '#000', // Add shadow for iOS shadow
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    button_delete: {
        backgroundColor: '#FF7377', // You can customize the button color here
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
    gap: {
      height: 10, // Adjust the gap size as needed
    },
    gap_middle: {
        height: 30, // Adjust the gap size as needed
      },
  });

export default Edit;