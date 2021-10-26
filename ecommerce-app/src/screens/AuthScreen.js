import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import logo from "../../assets/logo.png";
import { layoutStyle } from "../styles";



const Auth = () => {
    return (
        <View style={layoutStyle.container}>
            <Image style={styles.logo} source={logo}/>
            <Text>AuthScreen</Text>
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
