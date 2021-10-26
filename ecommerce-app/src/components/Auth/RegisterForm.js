import React from 'react'
import { View, Text } from 'react-native'
import { TextInput, Button } from "react-native-paper";
import { formStyles } from "../../styles";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegisterForm = (props) => {
    const { changeForm } = props;

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formData) => {
            console.log("Registro de Usuario enviado")
            console.log(formData)
        }
    })

    return (
        <View>
            <TextInput
                label = "Email"
                style={formStyles.input}
                onChangeText={ (text) => formik.setFieldValue("email", text)}
                value={formik.values.email}
                error={formik.errors.email}
            />
            <TextInput
                label = "Nombre de Usuario"
                style={formStyles.input}
                onChangeText={ (text) => formik.setFieldValue("username", text)}
                value={formik.values.username}
                error={formik.errors.username}
            />
            <TextInput
                label = "Contraseña"
                style={formStyles.input}
                secureTextEntry
                onChangeText={ (text) => formik.setFieldValue("password", text)}
                value={formik.values.password}
                error={formik.errors.password}
            />
            <TextInput
                label = "Repita la Contraseña"
                style={formStyles.input}
                secureTextEntry
                onChangeText={ (text) => formik.setFieldValue("repeatPassword", text)}
                value={formik.values.repeatPassword}
                error={formik.errors.repeatPassword}
            />

            <Button mode="contained"
                    style={formStyles.btnSucces}
                    onPress={formik.handleSubmit}
            >Registrarse</Button>

            <Button mode="text" style={formStyles.btnText}
                labelStyle={formStyles.btnTxtLabel}
                onPress={changeForm}
            >Iniciar sesión</Button>
        </View>
    )
}

export default RegisterForm

function initialValues() {
    return {
        email: "",
        username: "",
        password: "",
        repeatPassword : ""
    }
}

function validationSchema(){
    return {
        email: Yup.string().email(true).required(true),
        username: Yup.string().required(true),
        password: Yup.string().required(true),
        repeatPassword: Yup.string().required(true).oneOf([Yup.ref("password")],true)
    }
}


