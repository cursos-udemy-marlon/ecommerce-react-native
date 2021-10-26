import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button } from 'react-native-paper';


export default function App() {
  return (
    <PaperProvider>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
              Press me
            </Button>
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
