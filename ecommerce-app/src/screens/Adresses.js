import React from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { IconButton } from 'react-native-paper';

const Adresses = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Mis direcciones</Text>
            <TouchableWithoutFeedback 
                onPress={()=>console.log('Mis direcciones')} 
                >
            <View style={styles.addAdress}>
                <Text style={styles.addAdressText}>Añadir una dirección</Text>
                <IconButton 
                    icon="arrow-right"
                    color="#000"
                    size={19}
                />
            </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

export default Adresses

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    title: {
        fontSize: 20
    },
    addAdress :{
        borderWidth: 0.9,
        borderRadius: 5,
        borderColor: "#ddd",
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginTop: 10,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center"
    },
    addAdressText: {
        fontSize: 16
    }
})
