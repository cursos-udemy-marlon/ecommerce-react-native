import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import StatusBar from "../../components/StatusBar";
import Search from "../../components/Search";
import NewProducts from '../../components/Home/NewProducts';
import { getProductApi  } from "../../api/product";
import colors from "../../styles/colors";


const Home = () => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        (async () => {
            const response = await getProductApi(2);
            console.log(response)
        })()
    }, [])

    return (
        <>
        <StatusBar backgroundColor={colors.bgDark}
                   barStyle="light-content"
                
        />
        <Search />
        <ScrollView>
            {/* Banner */}
            <NewProducts />
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Home
