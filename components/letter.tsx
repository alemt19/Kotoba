import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface LetterProps {
    letter?: string;
    state: 'empty' | 'correct' | 'present' | 'absent' | 'uncheked';
}

interface BaseStyle {
    padding: number;
    alignItems: "center";
    justifyContent: "center";
    marginVertical: number;
    marginHorizontal: number;
    borderRadius: number;
    minWidth: number;
}

export default function Letter({ letter, state }: LetterProps) {
    const stateStyles = {
        present: styles.yellow,
        correct: styles.green,
        absent: styles.gray,
        empty: styles.empty_uncheked,
        uncheked: styles.empty_uncheked,
    };

    const textColor = (state === 'empty' || state === 'uncheked') ? '#000' : '#fff';

    return (
        <View style={stateStyles[state]}>
            <Text
                style={[styles.letter, { color: textColor }]}
            >
                {letter?.toUpperCase() || (state === 'empty' ? '' : '')}
            </Text>
        </View>
    );
}

const base: BaseStyle = {
    padding : 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    marginHorizontal: 2,
    borderRadius: 5,
    minWidth: 50,
};

const styles = StyleSheet.create({
    yellow: {
        ...base,
        backgroundColor: "#C9B458",
    },
    green: {
        ...base,
        backgroundColor: "#6AAA64",
    },
    gray: {
        ...base,
        backgroundColor: "#999999",
    },
    empty_uncheked: {
        ...base,
        backgroundColor: "#f0f0f0",
        borderWidth: 1,
        borderColor: "black",
    },
    letter: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
});