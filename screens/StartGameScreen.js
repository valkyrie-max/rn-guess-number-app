import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'

import Colors from '../constants/colors'
import Card from '../components/Card'
import Input from '../components/Input'


const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState()

    const numberInputHandler = inputText => {
        setEnteredValue(
            // regex to not allow the user enter decimals
            inputText.replace(/[^0-9]/g, '')
        );
    }

    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue(''); 
    }


    let confirmedOutput; 
    if (confirmed) {
        confirmedOutput = <Text>Chosen Number: {selectedNumber}</Text>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game?</Text>

                {/* user number input */}
                <Card style={styles.inputContainer}>
                    <Text>Enter a Number:</Text>
                    <Input style={styles.input} 
                        blurOnSubmit 
                        autoCapitalize="none" 
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}

                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />

                    {/* buttons */}
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonView}>
                            <Button 
                                color={Colors.primary} 
                                title="Reset" 
                                onPress={resetInputHandler}
                            />
                        </View>
                        <View style={styles.buttonView}>
                            <Button 
                                color={Colors.accent} 
                                title="Confirm" 
                                onPress={confirmInputHandler}
                            />    
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
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
    },
    input: {
        width: '50%',
        textAlign: 'center',
        fontSize: 25
    } 
})

export default StartGameScreen