import React from 'react'
import { StyleSheet, SafeAreaView, ActivityIndicator, Text } from 'react-native'

const ScreenLoading = props => {
    const { text, size, color } = props;
     return (
        <SafeAreaView style={styles.container}>
            <ActivityIndicator 
                size={size}
                color={color}
                style={styles.loading} />
            <Text style={styles.title}>{text}</Text>    
        </SafeAreaView>
    )
}

export default ScreenLoading


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loading: {
        marginBottom: 10
    },
    title: {
        fontSize:18,
    }
})


ScreenLoading.defaulPros = {
    text: "Cargando...",
    color: "#000"
}