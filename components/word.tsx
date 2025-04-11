import { View, StyleSheet } from 'react-native';
import Letter from '@/components/letter';
import React, { useState, useEffect } from 'react';

interface WordProps {
    selected: boolean;
    word: string;
    inputWord: string;
    check: boolean;
}

interface LetterState {
    letter: string;
    state: 'empty' | 'correct' | 'present' | 'absent';
}

export default function Word({ selected, word, inputWord, check }: WordProps) {
    const correctWordLetters = word.split('');
    const [hasBeenEvaluated, setHasBeenEvaluated] = useState(false);
    const [letterStates, setLetterStates] = useState<LetterState[]>(
        Array(word.length).fill(null).map(() => ({ letter: '', state: 'empty' }))
    );

    const evaluateWord = () => {
        const inputWordLetters = inputWord.split('');
        const newLetterStates: LetterState[] = letterStates.map((state) => ({ ...state })); // Clonamos el estado anterior
    
        // Primero, marcamos las letras correctas
        for (let i = 0; i < correctWordLetters.length; i++) {
            if (inputWordLetters[i] && correctWordLetters[i] === inputWordLetters[i]) {
                newLetterStates[i].state = 'correct';
                newLetterStates[i].letter = inputWordLetters[i];
                correctWordLetters[i] = ''; // Para no volver a contarlas como 'present'
            }
        }
    
        // Luego, marcamos las letras 'present'
        for (let i = 0; i < inputWordLetters.length; i++) {
            if (inputWordLetters[i] && newLetterStates[i].state !== 'correct') {
                const indexOfPresent = correctWordLetters.indexOf(inputWordLetters[i]);
                if (indexOfPresent !== -1) {
                    newLetterStates[i].state = 'present';
                    newLetterStates[i].letter = inputWordLetters[i];
                    correctWordLetters[indexOfPresent] = ''; // Para no marcar duplicados innecesariamente
                } else {
                    newLetterStates[i].state = 'absent';
                    newLetterStates[i].letter = inputWordLetters[i];
                }
            } else if (!inputWordLetters[i]) {
                newLetterStates[i].state = 'empty';
                newLetterStates[i].letter = '';
            }
        }
    
        setLetterStates(newLetterStates);
        setHasBeenEvaluated(true);
    };

    useEffect(() => {
        if (selected) {
            setLetterStates(Array(word.length).fill(null).map((_, index) => ({
                letter: inputWord[index] || '',
                state: inputWord[index] ? 'empty' : 'empty',
            })) as LetterState[]);
        } else if (!selected && !hasBeenEvaluated) {
            setLetterStates(Array(word.length).fill(null).map(() => ({ letter: '', state: 'empty' })) as LetterState[]);
        }
    }, [word, inputWord, selected, hasBeenEvaluated]);


    useEffect(() => {
        if (selected && check) {
            evaluateWord();
        }
    }, [check, selected, word, inputWord]); 

    return (
        <View style={styles.container}>
            {letterStates.map((letterState, index) => (
                <Letter key={index} state={letterState.state} letter={letterState.letter} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    }
});