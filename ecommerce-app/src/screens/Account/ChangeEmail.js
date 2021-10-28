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

const ChangeEmail = () => {
    const { auth } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    useFocusEffect(
        useCallback( () => {
            ( async () => {
                const response = await getMeApi(auth.token)
                response.email && await formik.setFieldValue("email", response.email);
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
                label="Email"
                style={formStyles.input}
                onChangeText={ (text) => formik.setFieldValue("email", text)}
                value={formik.values.email}
                error={formik.errors.email}
            />
            <Button
            mode="contained"
            style={formStyles.btnSucces}
            onPress={formik.handleSubmit}
            loading={loading}
           >
               Cambiar Email
           </Button>
        </View>
    )
}

export default ChangeEmail

const styles = StyleSheet.create({
    container: {
        padding: 20,
    }
})

function initialValues(){
    return {
        email: "",
    }
}

function validationSchema(){
    return {
        email : Yup.string().required(true),
    }
}
