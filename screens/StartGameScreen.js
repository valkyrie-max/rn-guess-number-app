import React, {useState} from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Button, 
    TouchableWithoutFeedback, 
    Keyboard, 
    Alert,
    Image } from 'react-native'

import Colors from '../constants/colors'
import Card from '../components/Card'
import Input from '../components/Input'
import BodyText from '../components/BodyText'


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
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!', 
                'Number has to be between 1 and 99.',
                [{
                    text: 'Okay, I got it',
                    style: 'destructive',
                    onPress: resetInputHandler
                }])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue(''); 
        Keyboard.dismiss()
    }


    let confirmedOutput; 
    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text style={styles.numberCardText}>Chosen Number:</Text>
                <Text style={styles.number}>{selectedNumber}</Text>
                <Button color="black" title="Start!" onPress={() => props.onStartGame(selectedNumber)}/>
            </Card>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game?</Text>
                {/* user number input */}
                <Card style={styles.inputContainer}>
                    <BodyText>Enter a Number:</BodyText>
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
        marginVertical: 40,
        fontFamily: 'open-sans-bold'
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
    },
    summaryContainer: {
        marginTop: 40,
        width: 350,
        maxWidth: '80%',
        alignItems: 'center'
    },
    numberCardText: {
        fontSize: 20,
        color: Colors.primary,
        marginBottom: 10
    },
    number: {
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 25,
        marginTop: 5,
        color: Colors.accent,
        borderWidth: 3,
        borderColor: Colors.primary,
        borderRadius: 15,
        width: 100,
        marginVertical: 20,
        textAlignVertical: 'center',
        padding: 5
    },
})

export default StartGameScreen