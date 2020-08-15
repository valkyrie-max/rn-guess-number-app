import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

import Card from '../components/Card'
import Colors from '../constants/colors'

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game?</Text>

            {/* user number input */}
            <Card style={styles.inputContainer}>
                <Text>Enter a Number:</Text>
                <TextInput />

                {/* buttons */}
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonView}>
                        <Button color={Colors.primary} title="Reset" onPress={() => {}}/>
                    </View>
                    <View style={styles.buttonView}>
                        <Button color={Colors.accent} title="Confirm" onPress={() => {}}/>    
                    </View>
                </View>
            </Card>
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
        marginVertical: 40
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
    },
    buttonView: {
        width: '40%'
    }
})

export default StartGameScreen