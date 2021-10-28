import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { TextInput, Button } from "react-native-paper";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { formStyles } from "../../styles";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { addAddressApi, getAddressApi, updateAddressApi } from "../../api/address";
import Toast from "react-native-root-toast";
import useAuth from "../../hooks/useAuth";
import { useFocusEffect, useNavigation } from "@react-navigation/native"



const AddAddress = (props) => {
    const { route: { params }, } = props;
    
    const [loading, setLoading] = useState(false);
    const { auth } = useAuth();
    const navigation = useNavigation();
    const [newAddress, setNewAddress] = useState(true);

    useEffect(() => {
        (async ()=>{
            if(params?.id) {
                setNewAddress(false)
                navigation.setOptions({title: "Actualizar Dirección"})
                const response = await getAddressApi(auth, params.id);
                await formik.setFieldValue("id", response.id);
                await formik.setFieldValue("title", response.title);
                await formik.setFieldValue("name_lastname", response.name_lastname);
                await formik.setFieldValue("address", response.address);
                await formik.setFieldValue("postal_code", response.postal_code);
                await formik.setFieldValue("city", response.city);
                await formik.setFieldValue("country", response.country);
                await formik.setFieldValue("phone", response.phone);
                await formik.setFieldValue("state", response.state);
            }
        })()
    }, [params])
    
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);
            try {
                if(newAddress) await addAddressApi(auth, formData)
                else await updateAddressApi(auth, formData)
                navigation.goBack();
            } catch (error) {
                Toast.show("Error al actualizar los datos",{
                    position: Toast.positions.CENTER,
                })
                console.log(error)
                setLoading(false);
            }
            
        }
    })
    return (
        <KeyboardAwareScrollView extraScrollHeight={25}>
            <View style={styles.container}>
                <Text style={styles.title}>Nueva Dirección</Text>
                <TextInput 
                    label="Titulo"
                    style={formStyles.input}
                    onChangeText={ (text) => formik.setFieldValue("title", text)}
                    value={formik.values.title}
                    error={formik.errors.title}
                />
                <TextInput 
                    label="Nombre y Apellidos"
                    style={formStyles.input}
                    onChangeText={ (text) => formik.setFieldValue("name_lastname", text)}
                    value={formik.values.name_lastname}
                    error={formik.errors.name_lastname}
                />

                <TextInput 
                    label="Dirección"
                    style={formStyles.input}
                    onChangeText={ (text) => formik.setFieldValue("address", text)}
                    value={formik.values.address}
                    error={formik.errors.address}
                />

                <TextInput 
                    label="Cod Postal"
                    style={formStyles.input}
                    onChangeText={ (text) => formik.setFieldValue("postal_code", text)}
                    value={formik.values.postal_code}
                    error={formik.errors.postal_code}
                />

            <TextInput 
                    label="Población"
                    style={formStyles.input}
                    onChangeText={ (text) => formik.setFieldValue("city", text)}
                    value={formik.values.city}
                    error={formik.errors.city}
                />

            <TextInput 
                    label="Estado"
                    style={formStyles.input}
                    onChangeText={ (text) => formik.setFieldValue("state", text)}
                    value={formik.values.state}
                    error={formik.errors.state}
                />  

            <TextInput 
                    label="Pais"
                    style={formStyles.input}
                    onChangeText={ (text) => formik.setFieldValue("country", text)}
                    value={formik.values.country}
                    error={formik.errors.country}
                /> 

            <TextInput 
                    label="Teléfono"
                    style={formStyles.input}
                    onChangeText={ (text) => formik.setFieldValue("phone", text)}
                    value={formik.values.phone}
                    error={formik.errors.phone}
                /> 

            <Button mode="contained"
                    onPress={formik.handleSubmit}
                    loading={loading}
                    style={[formStyles.btnSucces, styles.btnSucces]}>
                        {newAddress ? "Crear dirección " : "Actualizar dirección"}
                        </Button> 
            </View>    
        </KeyboardAwareScrollView>
    )
}

export default AddAddress


function initialValues(){
    return {
        title: "",
        name_lastname: "",
        address: "",
        postal_code: "",
        city: "",
        state: "",
        country: "",
        phone: "",
    }
}

function validationSchema(){
    return {
        title: Yup.string().required(true),
        name_lastname: Yup.string().required(true),
        address: Yup.string().required(true),
        postal_code: Yup.string().required(true),
        city: Yup.string().required(true),
        state: Yup.string().required(true),
        country: Yup.string().required(true),
        phone: Yup.string().required(true)
    }
}



const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    title : {
        fontSize: 20,
        paddingVertical: 20
    },
    btnSucces: {
        marginBottom: 20
    }
})
