import React from 'react'
import { StyleSheet,  View, Text } from 'react-native';
import { TextInput, Button } from "react-native-paper";
import { formStyles } from "../../styles";
import { useFormik } from "formik";
import * as Yup from "yup";

const ChangeName = () => {
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formValue) =>{
            console.log("Formulario Enviado");
            console.log(formValue);
        }
    })
    return (
        <View style={styles.container}>
            <TextInput
                label="Nombre"
                style={formStyles.input}
                onChangeText={ (text) => formik.setFieldValue("name", text)}
                value={formik.values.name}
                error={formik.errors.name}
            />
            <TextInput
                label="Apellidos"
                style={formStyles.input}
                onChangeText={ (text) => formik.setFieldValue("lastname", text)}
                value={formik.values.lastname}
                error={formik.errors.lastname}
            />
           <Button
            mode="contained"
            style={formStyles.btnSucces}
            onPress={formik.handleSubmit}
           >
               Cambiar nombre y apellidos
           </Button>
        </View>
    )
}

export default ChangeName

const styles = StyleSheet.create({
    container: {
        padding: 20,
    }
})

function initialValues(){
    return {
        name: "",
        lastname: ""
    }
}

function validationSchema(){
    return {
        name : Yup.string().required(true),
        lastname: Yup.string().required(true)
    }
}
