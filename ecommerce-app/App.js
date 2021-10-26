import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import AuthScreen from './src/screens/AuthScreen';

export default function App() {
  const [auth, setAuth] = useState(undefined);
  return (
    <PaperProvider>
      { auth ? 
            <Text>Zona de usuario</Text> 
            : <AuthScreen/> }
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  
});
