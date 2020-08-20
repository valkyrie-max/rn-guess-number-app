import React, {useState} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import NumberContainer from '../components/NumberContainer'
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
            <Text>Opponent's Guess:</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
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
    }
})

export default GameScreen; 