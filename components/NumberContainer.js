import React from 'react'
import {Text, Button, StyleSheet} from 'react-native'

import Card from '../components/Card'
import Colors from '../constants/colors'

const NumberContainer = props => {
    return(
        <Card style={styles.summaryContainer}>
            <Text style={styles.number}>{props.selectedNumber}</Text>
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

export default NumberContainer; 