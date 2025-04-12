import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Vibration } from 'react-native';

interface KeyboardProps {
  onInputChange: (text: string) => void;
  onCheckPress: () => void;
  difficulty: string;
  wordToGuess: string;
}

export default function Keyboard ({ onInputChange, onCheckPress, difficulty, wordToGuess }: KeyboardProps) {
  const [inputText, setInputText] = useState('');

  const handleKeyPress = useCallback((key: string) => {
    Vibration.vibrate(25);
    if (key === 'backspace') {
      if (inputText.length > Number(difficulty)) {

        setInputText(inputText.slice(0, -1-( inputText.length - Number(wordToGuess.length) )));
        onInputChange(inputText.slice(0, -1-( inputText.length - Number(wordToGuess.length) )));
      } else {
        setInputText(inputText.slice(0, -1));
        onInputChange(inputText.slice(0, -1));
      }
      
    } else if (key === 'check') {
      onCheckPress();
      setInputText('');
    } else {
      setInputText(inputText + key);
      onInputChange(inputText + key);
    }
  }, [inputText, onInputChange, onCheckPress]);

  const renderKey = useCallback((key: string) => (
    <TouchableOpacity
      key={key}
      style={[styles.key, key === 'backspace' && styles.keyBackspace, key === 'check' && styles.keyCheck]}
      onPress={() => handleKeyPress(key)}
    >
        {key === 'backspace' ? (
            <Image style={styles.icon} source={require('@/assets/images/backspace.png')}/>
        ) : key === 'check' ? (
            <Image style={styles.icon} source={require('@/assets/images/check.png')}/>
        ) : (
            <Text style={styles.keyText}>{key}</Text>
        )}
    </TouchableOpacity>
  ), [handleKeyPress]);

  const renderRow = useCallback((keys: string[]) => (
    <View style={styles.row} key={keys.join('-')}>
      {keys.map(renderKey)}
    </View>
  ), [renderKey]);

  const letters1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const letters2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'];
  const letters3 = ['backspace', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'check'];

  return (
    <View style={styles.container}>
      {renderRow(letters1)}
      {renderRow(letters2)}
      {renderRow(letters3)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#dadada',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 3,
  },
  bottomRow: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  key: {
    backgroundColor: '#fffa',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyBackspace: {
    backgroundColor: 'hsl(355, 50%, 85%)',
  },
  keyCheck: {
    backgroundColor: 'hsl(115, 50%, 85%)',
  },
  keyText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    width: 26,
    height: 26
  }
});