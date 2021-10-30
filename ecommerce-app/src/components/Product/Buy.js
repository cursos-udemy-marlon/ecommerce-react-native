import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from "react-native-paper";
import colors from '../../styles/colors';

const Buy = (props) => {
    const { product, quantity } = props;

    const addProductCart = () => {
        console.log("Añadiendo al carro")
    }

    return (
        <Button 
        mode="contained"
        contentStyle={styles.bntBuyContent}
        labelStyle={styles.btnLabel}
        style={styles.btn}
        onPress={addProductCart}
        >Añadir a la cesta</Button>
    )
}

export default Buy

const styles = StyleSheet.create({
    bntBuyContent: {
        backgroundColor: colors.primary,
        paddingVertical: 5,
    },
    btnLabel: {
        fontSize: 18,
    },
    btn :  {
        marginTop: 20
    }
})
