import React, { useCallback, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TextInput, Button } from "react-native-paper";
import colors from "../../styles/colors";
import Toast from "react-native-root-toast";
import { updateUserApi } from "../../api/user"
import { formStyles } from "../../styles"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { useFormik } from "formik";
import * as Yup from "yup";
import useAuth from "../../hooks/useAuth";

const ChangePassword = () => {
    const { auth, logout } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
          setLoading(true);
          try {
            const response = await updateUserApi(auth, formData);
            if (response.statusCode) throw "Error al cambiar la contraseña";
            // navigation.goBack();
            logout();
          } catch (error) {
            Toast.show(error, {
              position: Toast.positions.CENTER,
            });
          }
          setLoading(false);
        },
      });

    return (
        <View style={styles.container}>
            
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


            <Button
            mode="contained"
            style={formStyles.btnSucces}
            onPress={formik.handleSubmit}
            loading={loading}
           >
               Cambiar Contraseña
           </Button>
        </View>
    )
}

export default ChangePassword

const styles = StyleSheet.create({
    container: {
        padding: 20,
    }
})

function initialValues(){
    return {
        password: "",
        repeatPassword: "",
    }
}

function validationSchema(){
    return {
        password : Yup.string().required(true),
        repeatPassword: Yup.string().required(true).oneOf([Yup.ref("password")],true)
    }
}