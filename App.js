import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
const cog = require('./assets/cog.png')

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.container}>🪨 🧻 </Text> */}
      {/* <Image source={require(cog)} /> */}
      <Text style={{fontSize: 65}}> 🪨 🧻 ✂️ </Text>
      <View style={styles.button}>
        <Button title="Press the Dang Button!" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    marginBottom: 10,
  },
  button: {
    marginTop: 30,
    width: 250,
  }
});
