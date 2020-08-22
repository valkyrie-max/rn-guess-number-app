import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

import Card from '../components/Card'
import Colors from '../constants/colors'

const GameOver = props => {
    return(
        <View style={styles.screen}>
            <Card style={styles.summaryContainer}>
                <Text style={styles.gameOverText}>Game is over!</Text>
                <View style={styles.numbers}>
                    <Text style={styles.generalText}>Number you picked:</Text>
                    <View style={styles.specificNumberContainer}>
                        <Text style={styles.specificNumber}>{props.userNumber}</Text>
                    </View>
                </View>
                <View style={styles.numbers}> 
                    <Text style={styles.generalText}>Number of rounds:</Text>
                    <View style={styles.specificNumberContainer}>
                        <Text style={styles.specificNumber} >{props.roundsNumber}</Text>
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
        marginTop: 50,
        alignItems: 'center',
    },
    summaryContainer: {
        width: 350,
        maxWidth: '80%',
        alignItems: 'center'
    },
    gameOverText: {
        fontSize: 30,
        marginBottom: 20
    },
    generalText: {
        fontSize: 18,
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
        padding: 10
    },
    specificNumber: {
        fontSize: 30,
        fontWeight: '700',
        color: Colors.primary,
    },
    restartButton: {
        paddingTop: 20
    }
})

export default GameOver