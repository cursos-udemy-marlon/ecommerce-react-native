import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { TextInput, Button } from "react-native-paper";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { formStyles } from "../../styles";

const AddAddress = () => {
    return (
        <KeyboardAwareScrollView extraScrollHeight={25}>
            <View style={styles.container}>
                <Text style={styles.title}>Nueva Dirección</Text>
                <TextInput 
                    label="Titulo"
                    style={formStyles.input}
                />
                <TextInput 
                    label="Nombre y Apellidos"
                    style={formStyles.input}
                />

                <TextInput 
                    label="Dirección"
                    style={formStyles.input}
                />

                <TextInput 
                    label="Cod Postal"
                    style={formStyles.input}
                />

            <TextInput 
                    label="Población"
                    style={formStyles.input}
                />

            <TextInput 
                    label="Estado"
                    style={formStyles.input}
                />  

            <TextInput 
                    label="Pais"
                    style={formStyles.input}
                /> 

            <TextInput 
                    label="Telefono"
                    style={formStyles.input}
                /> 

            <Button mode="contained" 
                    style={[formStyles.btnSucces, styles.btnSucces]}>Crear Dirección</Button>      

                
            </View>    
        </KeyboardAwareScrollView>
    )
}

export default AddAddress


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    title : {
        fontSize: 20,
        paddingVertical: 20
    },
    btnSucces: {
        marginBottom: 20
    }
})
