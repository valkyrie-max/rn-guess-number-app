import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'

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
        <View>
            <Text>Opponent's Guess:</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default GameScreen; 