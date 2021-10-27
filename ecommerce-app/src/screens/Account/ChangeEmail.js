import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TextInput, Button } from "react-native-paper";
import colors from "../../styles/colors";
import { formStyles } from "../../styles"
const ChangeEmail = () => {
    return (
        <View style={styles.container}>
            <TextInput 
                label="Email"
                style={formStyles.input}
            />
            <Button 
                mode="contained"
                style={formStyles.btnSucces}
            >Cambiar Email</Button>
        </View>
    )
}

export default ChangeEmail

const styles = StyleSheet.create({
    container: {
        padding: 20,
    }
})
