import { View, Text, StyleSheet } from "react-native"
import React from "react";

// Este componente es temporal, alguien debe modificarlo para implementar la lógica
// del teclado, la selección y eso

interface LetterProps {
    letter?: string;
    state: "yellow" | "green" | "gray" | "empty";
}

interface BaseStyle {
    paddingBottom: number;
    paddingTop: number;
    paddingHorizontal: number;
    alignItems: "center";
    justifyContent: "center";
    marginVertical: number;
    marginHorizontal: number;
    borderRadius: number;
}

export default function Letter({ letter, state }: LetterProps) {
    const stateStyles = {
        yellow: styles.yellow,
        green: styles.green,
        gray: styles.gray,
        empty: styles.empty,
    }
    return(
        <View style={stateStyles[state]}>
            <Text style={styles.letter}>{letter || (state === 'empty' ? '' : '')}</Text>
        </View>
    )
}


// Estilo base para todos los estados
const base: BaseStyle = {
paddingBottom: 30,
paddingTop: 5,
paddingHorizontal: 15,
alignItems: "center",
justifyContent: "center",
marginVertical: 5,
marginHorizontal: 2,
borderRadius: 5,
};
  
// Estilos específicos parra cada estado
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
empty: {
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