import React from 'react'
import { StyleSheet, Alert } from 'react-native'
import { List } from "react-native-paper"
import { useNavigation} from "@react-navigation/native";
import useAuth from "../../hooks/useAuth";

const Menu = () => {
    const navigation = useNavigation();
    const { logout } = useAuth();

    const logoutAccount = () => {
        Alert.alert(
            "Cerrar sessión",
            "Estas seguro que quieres cerrar sesión ?",
            [
                {
                    text: "NO"
                },
                {
                    text: "SI",
                    onPress: () => logout()
                }
            ], {
                cancelable: false
            }
        )
    }

    return (
        <>
        <List.Section>
            <List.Subheader>Mi cuenta</List.Subheader>
                <List.Item  
                    title="Cambiar Nombre"
                    description="Cambia el nombre de tu usuario"
                    left={(props) => <List.Icon { ...props } icon="face" />}
                    onPress={() => console.log("cambio")}
                />

                <List.Item  
                    title="Cambiar Email"
                    description="Cambia el email de tu usuario"
                    left={(props) => <List.Icon { ...props } icon="at" />}
                    onPress={() => console.log("cambio")}
                />

                <List.Item  
                    title="Cambiar username"
                    description="Cambia el username de tu usuario"
                    left={(props) => <List.Icon { ...props } icon="sim" />}
                    onPress={() => console.log("cambio")}
                />

                <List.Item  
                    title="Cambiar contraseña"
                    description="Cambia la contraseña de tu usuario"
                    left={(props) => <List.Icon { ...props } icon="key" />}
                    onPress={() => console.log("cambio")}
                />

            <List.Item  
                    title="Mis direcciones"
                    description="Administras tus direcciones de envio"
                    left={(props) => <List.Icon { ...props } icon="map" />}
                    onPress={() => console.log("cambio")}
                />
        </List.Section>
        <List.Section>
                <List.Subheader>App</List.Subheader>
                <List.Item  
                    title="Mis Pedidos"
                    description="Listado de pedidos"
                    left={(props) => <List.Icon { ...props } 
                    icon="clipboard-list" />}
                    onPress={() => console.log("cambio")}
                />
                <List.Item  
                    title="Lista de deseo"
                    description="Listado de los productos que deseas"
                    left={(props) => <List.Icon { ...props } 
                    icon="heart" />}
                    onPress={() => navigation.navigate("favo")}
                />
                <List.Item  
                    title="Cerrar seción"
                    description="Adios"
                    left={(props) => <List.Icon { ...props } 
                    icon="logout" />}
                    onPress={logoutAccount}
                />
        </List.Section>
        </>
    )
}

export default Menu

const styles = StyleSheet.create({

})