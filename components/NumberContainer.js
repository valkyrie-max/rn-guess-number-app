import React from 'react'
import {Text, Button, StyleSheet} from 'react-native'

import Card from '../components/Card'
import Colors from '../constants/colors'

const NumberContainer = props => {
    return(
        <Card style={styles.summaryContainer}>
            <Text style={styles.numberCardText}>Chosen Number:</Text>
            <Text style={styles.number}>{props.selectedNumber}</Text>
            <Button color="black" title="Start!" />
        </Card>
    )
}

const styles = StyleSheet.create({
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
    }
})

export default NumberContainer; 