import React from "react";
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

//https://reactnative.dev/docs/touchableopacity

//https://reactnative.dev/docs/handling-touches
const GameButton = (props) => (
  <TouchableOpacity
    style={styles.buttonStyle}
    onPress={() => props.onPress(props.name)}
  >
    <Text style={styles.buttonText}>
      {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: 150,
    margin: 10,
    height: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    // shadowRadius: 50,
    // shadowColor: 'black',
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default GameButton;