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
        const newLetterStates = letterStates.map((inputLetterState, index) => {
            const correctLetter = correctWordLetters[index];
            const inputLetter = inputWord[index];
            
            if (!inputLetter) {
                return { ...inputLetterState, state: 'empty', letter: '' };
            } else if (correctLetter === inputLetter) {
                return { ...inputLetterState, state: 'correct', letter: inputLetter };
            } else if (correctWordLetters.includes(inputLetter)) {
                return { ...inputLetterState, state: 'present', letter: inputLetter };
            } else {
                return { ...inputLetterState, state: 'absent', letter: inputLetter };
            }
        }) as LetterState[];
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