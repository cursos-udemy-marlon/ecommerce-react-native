import React from 'react'
import { StyleSheet, View, Alert, Text } from 'react-native'
import { Button } from "react-native-paper"
import { map } from "lodash"
import { useNavigation } from "@react-navigation/native"
import colors from "../../styles/colors"
import { deleteAddressApi } from "../../api/address";
import useAuth from '../../hooks/useAuth'

const AddressList = (props) => {
    const { addresses, setReloadAddress } = props;
    const { auth } = useAuth();
    const navigation = useNavigation();

    const deleteAddressAlert = (address) => {
        Alert.alert(
            "Eliminando Dirección",
            `Estas seguro que quieres Eliminar la dirección ${address.title}`,
            [
                {
                    text: "No"
                },
                {
                    text: "Si",
                    onPress: () => deleteAddress(address.id)
                }
            ], {
                cancelable: false
            }
        )
    }

    const deleteAddress = async (id) => {
        try {
            await deleteAddressApi(auth, id)
            setReloadAddress(true)
        } catch (error) {
            console.error(error)
        }
    }

    const gotoUpdate = async (id) => {
        navigation.navigate("add-adresses", { id })
    }

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
                        <Button mode="contained" 
                        onPress={()=>gotoUpdate(address.id)}
                        color={colors.primary}>Editar</Button>
                        <Button mode="contained" 
                        onPress={()=>deleteAddressAlert(address)}
                        color={colors.danger}>Eliminar</Button>
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