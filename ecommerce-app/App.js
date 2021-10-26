import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect,useMemo} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import AuthScreen from './src/screens/AuthScreen';
import AuthContext from './src/context/AuthContext';


export default function App() {
  const [auth, setAuth] = useState(undefined);
  
  useEffect(() => {
    setAuth(null);
  }, []);

  const authData = useMemo(
    () => ({
        auth,
        login: null,
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
