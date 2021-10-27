import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from 'react-native'
import Account from "../screens/Account";

const Stack = createStackNavigator();

const AccountStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="account"
                component={Account}
                options={{
                    title: "Cuenta",
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default AccountStack
