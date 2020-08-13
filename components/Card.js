import React from 'react'
import {View, StyleSheet} from 'react-native'

const Card = props => {
                    // spread operator pulls all key-value pairs of an object out of this object and adds it to a new surrounding object
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 20,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 15
    }
})

export default Card