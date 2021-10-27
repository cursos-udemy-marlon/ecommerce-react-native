import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Account = () => {
    return (
        <View style={styles.container}>
            <Text>Estamos en mi cuenta</Text>
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

export default Account
