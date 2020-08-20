import React, {useState} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import Colors from '../constants/colors'
import Card from '../components/Card'

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min); 
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max-min)) + min; 
    if (randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude)
    } else {
        return randomNumber; 
    }
}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomNumber(1, 100, props.userChoice)
    )

    return (
        <View style={styles.screen}>
            <Card style={styles.summaryContainer}>
                <Text style={styles.generalText}>Opponent's Guess:</Text>
                <Text style={styles.number}>{currentGuess}</Text> 
            </Card>
            <Card style={styles.buttonContainer}>
                <Button title="Lower" onPress={ () => {} }/>
                <Button title="Greater" onPress={ () => {} }/>
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    },
    generalText: {
        fontSize: 18
    },
    summaryContainer: {
        marginTop: 40,
        width: 350,
        maxWidth: '80%',
        alignItems: 'center'
    },
    number: {
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 55,
        color: Colors.accent,
        borderWidth: 3,
        borderColor: Colors.primary,
        borderRadius: 15,
        width: 100,
        marginVertical: 20,
        textAlignVertical: 'center',
        padding: 5
    }
})

export default GameScreen; 