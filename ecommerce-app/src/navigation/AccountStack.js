import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from 'react-native'
import Account from "../screens/Account/Account";
import ChangeName from "../screens/Account/ChangeName";
import ChangeEmail from "../screens/Account/ChangeEmail";
import ChangeUsername from "../screens/Account/ChangeUsername";
import ChangePassword from "../screens/Account/ChangePassword";
import Adresses from "../screens/Account/Adresses";
import AddAddress from "../screens/Account/AddAddress";
import colors from '../styles/colors';

const Stack = createStackNavigator();

const AccountStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: colors.fontLight,
                headerStyle: {backgroundColor : colors.bgDark} ,
                cardStyle: {backgroundColor : colors.bgLight}
            }}
        >
            <Stack.Screen
                name="account"
                component={Account}
                options={{
                    title: "Cuenta",
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="change-name"
                component={ChangeName}
                options={{
                    title: "Cambiar Nombre y Apellidos"
                }}
            />

            <Stack.Screen
                name="change-email"
                component={ChangeEmail}
                options={{
                    title: "Cambiar Email"
                }}
            />

            <Stack.Screen
                name="change-username"
                component={ChangeUsername}
                options={{
                    title: "Cambiar Nombre de Usuario"
                }}
            />

        <Stack.Screen
                name="change-password"
                component={ChangePassword}
                options={{
                    title: "Cambiar Contraseña"
                }}
            /> 

        <Stack.Screen
                name="adresses"
                component={Adresses}
                options={{
                    title: "Mis Direcciones"
                }}
            />  


         <Stack.Screen
                name="add-adresses"
                component={AddAddress}
                options={{
                    title: "Adicionar Dirección"
                }}
            />           


        </Stack.Navigator>

        
    )
}

export default AccountStack
