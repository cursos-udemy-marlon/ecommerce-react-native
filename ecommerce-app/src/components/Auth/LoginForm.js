import React, {useState} from 'react'
import { View, Text } from 'react-native';
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginApi } from "../../api/user";
import { formStyles } from "../../styles";

const LoginForm = (props) => {
    const {changeForm} = props;
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true)
            try {
                const response = await loginApi(formData);
                if (response.statusCode) throw new Error("Error en el usuario o la contraseña")
                console.log(response)
            } catch (error) {
                setLoading(false)
                Toast.show("Error con el Login del usuario", {
                    position: Toast.positions.CENTER,
                  });
            }
        }
    })

    return (
        <View>
            
            <TextInput label="Email o Username" 
                        style={formStyles.input}
                        onChangeText={ (text) => formik.setFieldValue("identifier", text)}
                        value={formik.values.identifier}
                        error={formik.errors.identifier}
                        />
            <TextInput label="Contraseña" 
                        style={formStyles.input}
                        onChangeText={ (text) => formik.setFieldValue("password", text)}
                        value={formik.values.password}
                        error={formik.errors.password}
                        />

            <Button mode="contained"
                    style={formStyles.btnSucces}
                    onPress={formik.handleSubmit}
                    loading={loading}
            >Entrar</Button>

            <Button mode="text" style={formStyles.btnText}
                labelStyle={formStyles.btnTxtLabel}
                onPress={changeForm}
            >Registrarse</Button>
        </View>
    )
}

export default LoginForm

function initialValues() {
    return {
        identifier: "",
        password: ""
    }
}

function validationSchema(){
    return {
        identifier: Yup.string().required(true),
        password: Yup.string().required(true)
    }
}
