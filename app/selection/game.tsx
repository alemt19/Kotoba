import { Text, View, StyleSheet, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import wordsData from '@/assets/words.json'
import Word from '@/components/word';
import Keyboard from '@/components/keyboard';

export default function Game() {
  const tries = 5;
  const { category, difficulty } = useLocalSearchParams();
  const [wordToGuess, setWordToGuess] = useState('');
  const [typedText, setTypedText] = useState('');
  const [currentTry, setCurrentTry] = useState(0);
  const [isCheckPressed, setIsCheckPressed] = useState(false);
  const [hasGuessed, setHasGuessed] = useState(false); 

  useEffect(() => {
    const words: string[] = (wordsData as any)[difficulty.toString()]?.[category.toString()] || [];
    if (words.length > 0) {
      const randomIndex = Math.floor(Math.random() * words.length);
      setWordToGuess(words[randomIndex]);
    }
  }, [category, difficulty]);

  useEffect(() => {
    if (isCheckPressed) {
      console.log('Palabra a adivinar:', wordToGuess);
      console.log('Palabra ingresada:', typedText);

      if (typedText.toLowerCase() === wordToGuess.toLowerCase()) {
        setHasGuessed(true);
        console.log('¡Has adivinado la palabra!');
      } else {
        if (currentTry >= tries - 1) {
          console.log('¡Se acabaron los intentos! La palabra era:', wordToGuess);
        }
      }
      setTypedText(''); 
      setCurrentTry((prevTry) => prevTry + 1);
      setIsCheckPressed(false);
    }
  }, [isCheckPressed, typedText, wordToGuess, currentTry, tries]);

  const handleTextChange = (text: string) => {
    setTypedText(text.toLowerCase());
  };

  const handleCheckPress = () => {
    if (typedText.length === wordToGuess.length && currentTry < tries && !hasGuessed) {
      setIsCheckPressed(true);
    } else if (typedText.length !== wordToGuess.length) {
      console.log('La palabra debe tener', wordToGuess.length, 'letras.');
    } else if (hasGuessed) {
      console.log('Ya has adivinado la palabra.');
    } else if (currentTry >= tries) {
      console.log('Ya no tienes más intentos.');
    }
  };

  return (
    <>
      <View style={styles.header}>
        <Image style={styles.icon} source={require('@/assets/images/help.png')}/>
        <Text style={styles.title}>Kotoba</Text>
        <Image style={styles.icon} source={require('@/assets/images/settings.png')}/>
      </View>
      <View style={styles.container}>
        <View style={styles.wordsContainer}>
          {
            [...Array(tries)].map((_, index) => (
              <Word
                key={index}
                selected={index === currentTry}
                word={wordToGuess}
                inputWord={index === currentTry ? typedText : (index < currentTry ? typedText : '')} // Mostrar el texto solo en el intento actual
                check={isCheckPressed && index === currentTry} // Pasar check solo al intento actual
              />
            ))
          }
        </View>

        <Keyboard onInputChange={handleTextChange} onCheckPress={handleCheckPress} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 36,
    fontWeight: "bold"
  },
  icon: {
    height: 30,
    width: 30
  },
  wordsContainer: {
    alignItems: 'center',
    paddingVertical: 15,
  }
});