import React, {useState, useCallback} from 'react'
import { StyleSheet, View, Text, ScrollView,
    ActivityIndicator, 
    TouchableWithoutFeedback } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getAddressesApi } from "../../api/address";
import useAuth from "../../hooks/useAuth";
import { size } from "lodash";

const Adresses = () => {
    const { auth } = useAuth();
    const [adresses, setAdresses] = useState(null);
    const navigation = useNavigation();

    useFocusEffect(
        useCallback(()=>{
            ( async ()=>{
                const response = await getAddressesApi(auth);
                setAdresses(response)
                console.log(response);
            })()
        }, [])
    )


    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Mis direcciones</Text>
            <TouchableWithoutFeedback 
                onPress={()=>navigation.navigate("add-adresses")} 
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
            {!adresses ? (
                <ActivityIndicator
                    size="large"
                    style={styles.loading}
                    />
            ) : size(adresses) === 0 ? (
                <Text style={styles.noAddressText}>Crea tu primera dirección</Text>
            ) : (
                <Text>Listadod de direcciones</Text>
            )}

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
    },
    loading:{
        marginTop: 20

    },
    noAddressText: {
        fontSize: 16,
        marginTop: 20,
        textAlign: "center"
    }
})
