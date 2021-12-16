import React from "react";
import { View, StyleSheet, Text, Image } from 'react-native';

const CharcaterStyling = ({ player, choice: { characterImagePath, name }}) => {

  const title = name && name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <View style={styles.characterContainer}>
      <Text style={styles.playerDescription}>
        {player}
      </Text>
      <Image
        source={{ characterImagePath }}
        resizeMode="contain"
        style={styles.characterImage} 
      />
      <Text style={styles.characterCardTitle}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  characterContainer: { 
    flex: 1, 
    alignItems: 'center',
  },
  playerDescription: {
    fontSize: 30,
    color: 'black', 
    fontWeight: 'bold',
    // textDecorationLine: 'underline'

  },
  characterCardTitle: { 
    fontSize: 30, 
    color: 'black' 
  },
  characterImage: { 
    width: 150,
    height: 150,
    padding: 10,
  }
});

export default CharcaterStyling;