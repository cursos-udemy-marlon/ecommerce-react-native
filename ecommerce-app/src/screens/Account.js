import React from 'react'
import { StyleSheet, ScrollView, Text } from 'react-native'
import Search from "../components/Search"
import StatusBar from '../components/StatusBar'
import colors from '../styles/colors'

const Account = () => {
    return (
        <>
            <StatusBar  backgroundColor={colors.bgDark}
                barStyle="light-content"
            />
            <Search/>
            <ScrollView>
                
                <Text>Estamos en mi cuenta</Text>
            </ScrollView>
        </>
    )
}


export default Account
