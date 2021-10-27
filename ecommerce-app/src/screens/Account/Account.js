import React, {useState, useCallback} from 'react'
import { ScrollView, Text } from 'react-native'
import { useFocusEffect } from "@react-navigation/native";
import Search from "../../components/Search"
import StatusBar from '../../components/StatusBar'
import useAuth from "../../hooks/useAuth";
import { getMeApi } from "../../api/user";
import ScreenLoading from "../../components/ScreenLoading"
import colors from '../../styles/colors'

const Account = () => {
    const [user, setUser] = useState(null);
    const {auth} = useAuth();


    useFocusEffect(
        useCallback(()=>{
            ( async ()=>{
                const response = await getMeApi(auth.token);
                setUser(response)
                console.log(response);
            })()
        }, [])
    )

   

    return (
        <>
            <StatusBar  backgroundColor={colors.bgDark}
                barStyle="light-content"
            />

            {!user ? (<ScreenLoading  size="large" text="Hola..." color="#000"/> )
            : (
            <>
                <Search/>
                <ScrollView>
                    
                    <Text>Estamos en mi cuenta</Text>
                </ScrollView>
            </> )
            }
            
        </>
    );
}


export default Account
