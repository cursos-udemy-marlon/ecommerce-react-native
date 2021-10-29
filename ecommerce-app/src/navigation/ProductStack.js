import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/Products/Home';
import colors from "../styles/colors";

const Stack = createStackNavigator()

const ProductStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: colors.fontLight,
                headerStyle: { backgroundColor: colors.bgDark},
                cardStyle : { backgroundColor: colors.bgLight}
            }}
        >
            <Stack.Screen
                name="home"
                component={Home}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default ProductStack
