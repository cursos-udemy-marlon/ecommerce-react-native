import React, { useCallback, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TextInput, Button } from "react-native-paper";
import colors from "../../styles/colors";
import Toast from "react-native-root-toast";
import { getMeApi, updateUserApi } from "../../api/user"
import { formStyles } from "../../styles"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { useFormik } from "formik";
import * as Yup from "yup";
import useAuth from "../../hooks/useAuth";

const ChangeUsername = () => {
    const { auth } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    useFocusEffect(
        useCallback( () => {
            ( async () => {
                const response = await getMeApi(auth.token)
                response.username && await formik.setFieldValue("username", response.username);
            })()
        }, [] )
    )

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) =>{
            setLoading(true);
            try {
                await updateUserApi(auth, formData)
                navigation.goBack();
            } catch (error) {
                Toast.show("Error al actualizar los datos",{
                    position: Toast.positions.CENTER,
                })
                setLoading(false)
            }
            
        }
    })

    return (
        <View style={styles.container}>
            <TextInput 
                label="Nombre de usuarios"
                style={formStyles.input}
                onChangeText={ (text) => formik.setFieldValue("username", text)}
                value={formik.values.username}
                error={formik.errors.username}
            />
            <Button
            mode="contained"
            style={formStyles.btnSucces}
            onPress={formik.handleSubmit}
            loading={loading}
           >
               Cambiar Nombre de Usuario
           </Button>
        </View>
    )
}

export default ChangeUsername

const styles = StyleSheet.create({
    container: {
        padding: 20,
    }
})

function initialValues(){
    return {
        username: "",
    }
}

function validationSchema(){
    return {
        username : Yup.string().required(true),
    }
}

