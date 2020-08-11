import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game?</Text>

            {/* user number input */}
            <View style={styles.inputContainer}>
                <Text>Enter a Number:</Text>
                <TextInput />

                {/* buttons */}
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={() => {}}/>
                    <Button title="Confirm" onPress={() => {}}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 20
    },
    inputContainer: {
        width: 350,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        justifyContent: 'space-evenly'
    }
})

export default StartGameScreen