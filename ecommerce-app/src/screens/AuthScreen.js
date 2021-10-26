import React, {useState} from 'react'
import { StyleSheet, View, Text, Image, KeyboardAvoidingView, Platform } from 'react-native';
import logo from "../../assets/logo.png";
import RegisterForm from '../components/Auth/RegisterForm';
import { layoutStyle } from "../styles";


const Auth = () => {
    const [showLogin, setShowLogin] = useState(true);
    const changeForm = () => setShowLogin(!showLogin);

    return (
        <View style={layoutStyle.container}>
            <Image style={styles.logo} source={logo}/>
                <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    {showLogin ? <Text>FormLogin</Text> : <RegisterForm changeForm={changeForm}/>  }
                </KeyboardAvoidingView>
        </View>
    )
}

export default Auth

const styles = StyleSheet.create({
        logo: {
            width: "100%",
            height: 50,
            resizeMode: "contain",
            marginBottom: 20
        }
});
