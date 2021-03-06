import React from 'react'
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import {map} from "lodash";
import { API_URL } from "../../utils/constants"
import { useNavigation } from "@react-navigation/native"

const ListProduct = (props) => {
    const { products } = props;
    const navigation = useNavigation();

const goToProduct = (id) => {
    navigation.push("product", {idProduct: id})
}    
    
    return (
        <View style={styles.container}>
            {map(products, (product) =>(
                <TouchableWithoutFeedback key={product.id} 
                        onPress={()=>goToProduct(product.id)}>
                    <View style={styles.containerProduct}>
                        <View style={styles.product}>
                       
                        <Image style={styles.image}
                            source={{ 
                                uri: `${API_URL}${product.main_image.url}`
                            }}
                        />
                        <Text style={styles.name}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        >{product.title}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            ))}
        </View>
    )
}

export default ListProduct

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
        margin: -3,
        alignItems: 'flex-start'
    },
    containerProduct: {
        width: "50%",
        padding: 3,
    },
    product: {
        padding: 10,
        backgroundColor: "#f0f0f0"
    },
    image: {
        height: 150,
        resizeMode: "contain"
    },
    name : {
        marginTop: 15,
        fontSize: 18
    }
})
