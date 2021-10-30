import React from 'react'
import { View, StyleSheet,Text } from 'react-native';
import {  Button  } from "react-native-paper";
import colors from "../../styles/colors";

const Favorite = (props) => {
    const { product } = props

    const addFavorite = () => {
        console.log("Add Favorito");
        console.log(product.title);
    }

    return (
        <Button mode="contained"
            contentStyle={styles.btnAddFavoriteContent}
            labelStyle={styles.btnAddFavoriteLavel}
            style={styles.btn}
            onPress={addFavorite}
        >
            Añadir a Favoritos
        </Button>
    )
}

export default Favorite

const styles = StyleSheet.create({
    btnAddFavoriteContent : {
        backgroundColor: colors.green,
        paddingVertical: 5,
    },
    btnAddFavoriteLavel : {
        fontSize: 18,
    },
    btn : {
       marginTop: 20 
    }
})
