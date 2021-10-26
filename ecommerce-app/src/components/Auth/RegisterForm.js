import React from 'react'
import { View, Text } from 'react-native'
import { TextInput, Button } from "react-native-paper";
import { formStyles } from "../../styles";

const RegisterForm = () => {
    return (
        <View>
            <TextInput
                label = "Email"
                style={formStyles.input}
            />
            <TextInput
                label = "Nombre de Usuario"
                style={formStyles.input}
            />
            <TextInput
                label = "Contraseña"
                style={formStyles.input}
                secureTextEntry
            />
            <TextInput
                label = "Repita la Contraseña"
                style={formStyles.input}
                secureTextEntry
            />

            <Button mode="contained"
                    style={formStyles.btnSucces}
            >Registrarse</Button>

            <Button mode="text" style={formStyles.btnText}
                labelStyle={formStyles.btnTxtLabel}
            >Iniciar sesión</Button>
        </View>
    )
}

export default RegisterForm
