import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Searchbar } from "react-native-paper"
import colors from "../../styles/colors";

const Search = () => {
    return (
        <View style={styles.container}>
                <Searchbar 
                    placeholder="Busca tu producto"
                />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bgDark,
        paddingVertical: 10,
        paddingHorizontal: 20,
        zIndex: 1,
      },
      containerInput: {
        position: "relative",
        alignItems: "flex-end",
      },
      backArrow: {
        position: "absolute",
        left: 0,
        top: 15,
        color: colors.fontLight,
      },
})
