import React from 'react'
import {View, Text, StyleSheet, Button, Image} from 'react-native'

import Card from '../components/Card'
import BodyText from '../components/BodyText'
import Colors from '../constants/colors'

const GameOver = props => {
    return(
        <View style={styles.screen}>
            <Card style={styles.summaryContainer}>
                <Text style={styles.gameOverText}>Game is over!</Text>
                <View style={styles.imageRound}>
                    <Image style={styles.image} source={require(`../assets/naruto-thumbs-up.jpg`)} />
                </View>
                <View style={styles.numbers}>
                    <BodyText style={styles.generalText}>Number you picked:</BodyText>
                    <View style={styles.specificNumberContainer}>
                        <BodyText style={styles.specificNumber}>{props.userNumber}</BodyText>
                    </View>
                </View>
                <View style={styles.numbers}> 
                    <BodyText style={styles.generalText}>Number of rounds:</BodyText>
                    <View style={styles.specificNumberContainer}>
                        <BodyText style={styles.specificNumber} >{props.roundsNumber}</BodyText>
                    </View>
                </View>
                <View style={styles.restartButton} >
                    <Button color="black" title="Restart?" onPress={props.onRestart} />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
    },
    summaryContainer: {
        width: 350,
        maxWidth: '80%',
        alignItems: 'center'
    },
    gameOverText: {
        fontSize: 24,
        marginBottom: 20
    },
    generalText: {
        fontSize: 16,
        marginBottom: 5
    },
    numbers: {
        alignItems: 'center',
        marginVertical: 10
    },
    specificNumberContainer: {
        borderWidth: 3,
        borderColor: Colors.primary,
        borderRadius: 15,
        width: 100,
        alignItems: 'center',
        marginVertical: 10,
        // padding: 5
    },
    specificNumber: {
        fontSize: 25,
        fontWeight: '700',
        color: Colors.accent,
    },
    restartButton: {
        marginVertical: 10
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageRound: {
        borderRadius: 170,
        width: 170,
        height: 170,
        overflow: 'hidden'
    }
})

export default GameOver