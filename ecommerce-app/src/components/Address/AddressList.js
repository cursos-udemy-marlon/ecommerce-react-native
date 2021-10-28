import React from 'react'
import { StyleSheet, View, Alert, Text } from 'react-native'
import { Button } from "react-native-paper"
import { map } from "lodash"
import colors from "../../styles/colors"

const AddressList = (props) => {
    const { addresses } = props;
    return (
        <View style={styles.container}>
            {map(addresses, (address) => (
                <View key={address.id} style={styles.address}>
                    <Text style={styles.title}>{address.title}</Text>
                    <Text>{address.name_lastname}</Text>
                    <Text>{address.address}</Text>
                    <View style={styles.blockline}>
                        <Text>{address.state}, </Text>
                        <Text>{address.city}, </Text>
                        <Text>{address.postal_code}</Text>
                    </View>
                    <Text>{address.country}</Text>
                    <Text>Número de Teléfono: {address.phone}</Text>
                    <View style={styles.actions}>
                        <Button mode="contained" color={colors.primary}>Editar</Button>
                        <Button mode="contained" color={colors.danger}>Eliminar</Button>
                    </View> 
                </View>    
            ))}
        </View>
    )
}

export default AddressList

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    address :{
        borderWidth: 0.9,
        borderRadius: 5,
        borderColor: "#ddd",
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginBottom: 15
    },
    title: {
        fontWeight: "bold",
        paddingBottom: 5
    },
    blockline: {
        flexDirection: "row",
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30
    }
})