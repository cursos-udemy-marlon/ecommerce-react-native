import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Cart = () => {
    return (
        <View style={styles.container}>
            <Text>Estamos en el carro</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Cart
