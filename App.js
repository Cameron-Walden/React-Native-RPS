import React, { useState } from 'react';
import {Text, View, StyleSheet } from 'react-native';
import Rounds from './src/Rounds.js'
import Characters from './src/Characters.js';
import CharcaterStyling from './src/CharacterStyling.js';
import GameButton from './src/GameButton.js';
import cog from './assets/cog.png';

export default function App() {
  const [gamePrompt, setGamePrompt] = useState('Pick a character!');
  const [playerChoice, setPlayerChoice] = useState({});
  const [computerChoice, setComputerChoice] = useState({});
  // const [playing, setPLaying] = useState(false);

  const onPress = (playerChoice) => {
    const [result, compChoice] = Rounds(playerChoice);
    
    const newPlayerChoice = Characters.find(character => character.name === playerChoice);
    const newComputerChoice = Characters.find(character => character.name === compChoice);

    setGamePrompt(result);
    setPlayerChoice(newPlayerChoice);
    setComputerChoice(newComputerChoice);
  };

  return ( 
    <View style={styles.container}>
      <View style={styles.characterContainer}>
        <CharcaterStyling player="Player" choice={playerChoice}/>
        <Text>VS</Text>
        <CharcaterStyling player="Computer" choice={computerChoice}/>
      </View>
      {Characters.map(character => {
        return (
          <GameButton
            key={character.name}
            name={character.name}
            onPress={onPress}
          />
        )
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tan'
  },
  characterContainer: { 
    margin: 10,
    borderWidth: 2,
    paddingTop: 100,
    shadowRadius: 50,
    paddingBottom: 100,
    borderColor: 'black',
    shadowOpacity: 0.90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    // shadowColor: 'black',
    shadowOffset: { height: 5, width: 5 },
  },
});