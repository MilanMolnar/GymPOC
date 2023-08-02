import { Link, useRouter } from 'expo-router';
import { StyleSheet, View, Text, Button, Alert, Pressable } from 'react-native';

type ButtonProps = {
    title: string
    route: string
    color: string
}

export default function NavigationButtonComponent(props: ButtonProps) {

    return (
        <View style={[styles.button, { backgroundColor: props.color }]}>
            <Link style={styles.text} href={props.route}>{props.title}</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 35,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        width: 350
    },
});
