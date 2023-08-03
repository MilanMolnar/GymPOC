import { StyleSheet, View, Text, Button, Alert, Pressable } from 'react-native';

type ButtonProps = {
    title: string
    onPress: Function
    color: string
}

export default function ButtonComponent(props: ButtonProps) {
    return (
        <Pressable 
            style={[styles.button, {backgroundColor: props.color}]}
            onPress={() => { props.onPress() }}
        >
            <Text style={styles.text}>{props.title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color:'white'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 0,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
});
