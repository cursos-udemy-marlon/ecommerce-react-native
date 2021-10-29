import React, {useState,useEffect} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import ListProduct from "./ListProduct";
import { getLastProuctsApi  } from "../../api/product";

const NewProducts = () => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        (async () => {
            const response = await getLastProuctsApi();
            setProducts(response)
        })()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nuevos Productos</Text>
            {products && <ListProduct products={products}/>}
        </View>
    )
}

export default NewProducts

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 20
    },
    title : {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10
    }, 
    
})
