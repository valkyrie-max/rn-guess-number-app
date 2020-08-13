import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '18%',
        paddingTop: 70,
        paddingBottom: 40,
        backgroundColor: '#e2e5e7',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: '#3b385b',
        fontWeight: 'bold',
        fontSize: 28,
        textTransform: 'uppercase'
    }
})

export default Header; 