import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Favorites = () => {
    return (
        <View style={styles.container}>
            <Text>Estamos en Favoritos</Text>
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

export default Favorites
