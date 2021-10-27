import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect,useMemo} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import AuthScreen from './src/screens/AuthScreen';
import AuthContext from './src/context/AuthContext';
import { setTokenApi, getTokenApi } from "./src/api/token";
import jwtDecode from "jwt-decode";

export default function App() {
  const [auth, setAuth] = useState(undefined);
  
  useEffect(() => {
    (async () => {
        const token = await getTokenApi();
        if(token) {
          setAuth({
            token,
            idUser: jwtDecode(token).id
          })
        } else {
          setAuth(null);
        }
    })()
  }, []);

  const login = (user) => {
    setTokenApi(user.jwt);
    setAuth({
      token: user.jwt,
      idUser: user.user.id
    })
  }

  const authData = useMemo(
    () => ({
        auth,
        login,
        logout: null,
    }),
    [auth]
  );

  if(auth === undefined) return null;

  return (
    <AuthContext.Provider value={authData}>
      <PaperProvider>
        { auth ? 
              <Text>Zona de usuario</Text> 
              : <AuthScreen/> }
      </PaperProvider>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  
});
