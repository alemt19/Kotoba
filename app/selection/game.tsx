import { Text, View, StyleSheet, Modal, Pressable } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { useLocalSearchParams } from 'expo-router';
import wordsData from '@/assets/words.json'
import Word from '@/components/word';
import Keyboard from '@/components/keyboard';
import Button from '@/components/button';
import { Audio } from 'expo-av'
import { useRouter } from 'expo-router';
import { Home, Loader } from 'lucide-react-native';

export default function Game() {
  const router = useRouter();
  const tries = 5;
  const { category, difficulty } = useLocalSearchParams();
  const [wordToGuess, setWordToGuess] = useState('');
  const [typedText, setTypedText] = useState('');
  const [currentTry, setCurrentTry] = useState(0);
  const [isCheckPressed, setIsCheckPressed] = useState(false);
  const [hasGuessed, setHasGuessed] = useState(false); 

  const [showModal, setShowModal] = useState(false);
  const [isVictory, setIsVictory] = useState(false);
  const victorySound = useRef<Audio.Sound | null>(null);
  const defeatSound = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    const loadSounds = async () => {
      try {
        const { sound: victory } = await Audio.Sound.createAsync(
          require('@/assets/sounds/victory.mp3')
        );
        victorySound.current = victory;

        const { sound: defeat } = await Audio.Sound.createAsync(
          require('@/assets/sounds/defeat.mp3')
        );
        defeatSound.current = defeat;
      } catch (error) {
        console.error('Error loading sounds:', error);
      }
    };

    loadSounds();

    return () => {
      if (victorySound.current) {
        victorySound.current.unloadAsync();
      }
      if (defeatSound.current) {
        defeatSound.current.unloadAsync();
      }
    };
  }, []);

  const playSound = async (type: 'victory' | 'defeat') => {
    const soundToPlay = type === 'victory' ? victorySound.current : defeatSound.current;

    if (soundToPlay) {
      try {
        // Definir rangos personalizados (en milisegundos)
        let startMs = 0;
        let endMs = 0;

        if (type === 'victory') {
          startMs = 70000; // Desde el 1:10
          endMs = 100000;    // Hasta el 1:40
        } else {
          startMs = 51000; // Desde el 0:50
          endMs = 80000;    // Hasta el 1:20
        }

        await soundToPlay.setPositionAsync(startMs);
        await soundToPlay.playAsync();

        soundToPlay.setOnPlaybackStatusUpdate((status) => {
          if (status.isLoaded && status.positionMillis >= endMs) {
            soundToPlay.pauseAsync();
          }
        });
      } catch (error) {
        console.error('Error playing sound:', error);
      }
    }
  };

  useEffect(() => {
    const words: string[] = (wordsData as any)[difficulty.toString()]?.[category.toString()] || [];
    if (words.length > 0) {
      const randomIndex = Math.floor(Math.random() * words.length);
      setWordToGuess(words[randomIndex]);
    }
  }, [category, difficulty]);

  useEffect(() => {
    if (isCheckPressed) {
      console.log('Cantidad de letras', difficulty);
      console.log('Palabra a adivinar:', wordToGuess);
      console.log('Palabra ingresada:', typedText);
      
      if (typedText.toLowerCase() === wordToGuess.toLowerCase()) {
        setHasGuessed(true);
        setIsVictory(true);
        setShowModal(true);
        playSound('victory');
        console.log('¡Has adivinado la palabra!');
      } else {
        if (currentTry >= tries - 1) {
          setIsVictory(false);
          setShowModal(true);
          playSound('defeat');
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

    if (typedText.length > Number(wordToGuess.length)) {
      setTypedText(typedText.slice(0, -( typedText.length - Number(wordToGuess.length))));
      console.log('Palabra recortada:', typedText.slice(0, -( typedText.length - Number(wordToGuess.length))));
    }
    if ( typedText.length >= Number(wordToGuess.length) && currentTry < tries && !hasGuessed) {
      setIsCheckPressed(true);
    } else if (typedText.length !== wordToGuess.length) {
      console.log('La palabra debe tener', wordToGuess.length, 'letras.');
    } else if (hasGuessed) {
      console.log('Ya has adivinado la palabra.');
    } else if (currentTry >= tries) {
      console.log('Ya no tienes más intentos.');
    }
  };

  const restartGame = async () => {
    if (victorySound.current) await victorySound.current.stopAsync();
    if (defeatSound.current) await defeatSound.current.stopAsync();

    router.replace({
      pathname: "/selection/game",
      params: {
        difficulty: difficulty,
        category: category
      }
    });

    const words: string[] = (wordsData as any)[difficulty.toString()]?.[category.toString()] || [];
    if (words.length > 0) {
      const randomIndex = Math.floor(Math.random() * words.length);
      setWordToGuess(words[randomIndex]);
    }
  
    setShowModal(false);
    setTypedText('');
    setCurrentTry(0);
    setHasGuessed(false);
  };

  const regresarHome = async () => {
    if (victorySound.current) await victorySound.current.stopAsync();
    if (defeatSound.current) await defeatSound.current.stopAsync();

    router.replace({
      pathname: "/",
      params: {
        difficulty: difficulty,
        category: category
      }
    });

  }
  

  return (
    <>
      <View style={styles.header}>
        <Button type={1}></Button>
        <Text style={styles.title}>Kotoba</Text>
        <Button type={2}></Button>
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

        <Keyboard onInputChange={handleTextChange} onCheckPress={handleCheckPress} difficulty={difficulty?.toString()} wordToGuess={wordToGuess} />
      </View>
      
      <Modal visible={showModal} transparent={true} animationType="fade">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <View style={{width : 300, height : 280, backgroundColor: 'white',padding: 30, borderRadius: 20,alignItems: 'center'}}>
            <Text style={{ fontSize: 35, fontWeight: 'bold', marginBottom: 20 }}>
              {isVictory ? '¡Victoria!' : '¡Derrota!'}
            </Text>
            <Text style={{ marginBottom: 20 }}>
              {isVictory
                ? '¡Felicidades, adivinaste la palabra!'
                : `La palabra era: ${wordToGuess}`}
            </Text>
            <View style={{flex : 1, flexDirection : "column", gap : 8}}>
              <Pressable style={{backgroundColor : "#3F8EFC", width : 130, height : 50, borderRadius : 15}} onPress={restartGame} >
                <View style={{alignItems : "center", justifyContent : 'center', width : "100%", height : "100%", flexDirection : 'row', gap : 6}}>
                  <Loader color={"#fff"} size={16}></Loader>
                  <Text style={{ fontSize: 18, color : "#fff"}}>Reiniciar</Text>
                </View>
              </Pressable>
              <Pressable style={{backgroundColor : "#3F8EFC", width : 130, height : 50, borderRadius : 15}} onPress={regresarHome} >
                <View style={{alignItems : "center", justifyContent : 'center', width : "100%", height : "100%",  flexDirection : 'row', gap : 6}}>
                  <Home color={"#fff"} size={16}></Home>
                  <Text style={{ fontSize: 18, color : "#fff"}}>Home</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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