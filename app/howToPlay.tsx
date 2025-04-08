import { Text, View, StyleSheet } from 'react-native';
import Letter from '@/components/letter';
import React from "react";

export default function howToPlay() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        👉 Adivina la palabra en <Text style={styles.boldText}>seis intentos.</Text>
      </Text>
      <Text style={styles.text}>
        👉 Cada intento debe ser una <Text style={styles.boldText}>palabra valida de xs letras.</Text>
      </Text>
      <Text style={styles.text}>
        ⚠️ Puede haber letras repetidas.
      </Text>
      <Text style={styles.text}>
        🟢🟡⚫ Despues de cada intento <Text style={styles.boldText}>se colorea el color de la casilla de esta forma.</Text>
      </Text>

      <Text style={styles.text}>
        La letra O esta en la palabra pero en la posicion incorrecta.
      </Text>
      <View style={styles.letterContainer}>
        <Letter state='gray' letter='L'/>
        <Letter state='gray' letter='U'/>
        <Letter state='gray' letter='E'/>
        <Letter state='gray' letter='G'/>
        <Letter state='green' letter='O'/>
      </View>

      <Text style={styles.text}>
        Las letras
        <Text style={styles.boldText}> C, A </Text>
        y
        <Text style={styles.boldText}> O </Text>
        están en la palabra y en la posicion correcta.
      </Text>
      <View style={styles.letterContainer}>
        <Letter state='green' letter='C'/>
        <Letter state='green' letter='A'/>
        <Letter state='yellow' letter='N'/>
        <Letter state='green' letter='O'/>
        <Letter state='gray' letter='A'/>
      </View>

      <Text style={styles.text}>
        Las letras
        <Text style={styles.boldText}> J, T </Text>
        y
        <Text style={styles.boldText}> S </Text>
        estan en la palabra
      </Text>
      <View style={styles.letterContainer}>
        <Letter state='gray' letter='J'/>
        <Letter state='yellow' letter='O'/>
        <Letter state='gray' letter='T'/>
        <Letter state='yellow' letter='A'/>
        <Letter state='gray' letter='S'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 25
  },
  text: {
    fontSize: 20,
    marginVertical: 10
  },
  letterContainer: {
    flexDirection: "row",

  },
  boldText: {
    fontWeight: 'bold',
  },
});
