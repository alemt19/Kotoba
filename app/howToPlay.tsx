import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Letter from '@/components/letter';
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context"

export default function HowToPlay() {

  const insets = useSafeAreaInsets();

  return (

    <ScrollView style={styles.containerScrooll}>
      <View style={[styles.container, {paddingTop : insets.top, paddingBottom : insets.bottom}]}>

        <View style={styles.containerApp}>
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
            <Letter state='absent' letter='L'/>
            <Letter state='absent' letter='U'/>
            <Letter state='absent' letter='E'/>
            <Letter state='absent' letter='G'/>
            <Letter state='correct' letter='O'/>
          </View>

          <Text style={styles.text}>
            Las letras
            <Text style={styles.boldText}> C, A </Text>
            y
            <Text style={styles.boldText}> O </Text>
            están en la palabra y en la posicion correcta.
          </Text>
          <View style={styles.letterContainer}>
            <Letter state='correct' letter='C'/>
            <Letter state='correct' letter='A'/>
            <Letter state='present' letter='N'/>
            <Letter state='correct' letter='O'/>
            <Letter state='absent' letter='A'/>
          </View>

          <Text style={styles.text}>
            Las letras
            <Text style={styles.boldText}> J, T </Text>
            y
            <Text style={styles.boldText}> S </Text>
            estan en la palabra
          </Text>
          <View style={styles.letterContainer}>
            <Letter state='absent' letter='J'/>
            <Letter state='present' letter='O'/>
            <Letter state='absent' letter='T'/>
            <Letter state='present' letter='A'/>
            <Letter state='absent' letter='S'/>
          </View>
        </View>
        
      </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  containerScrooll : {
    
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent : 'center',
    alignItems : 'center',
  },
  containerApp : {
    maxWidth : 300,
    marginTop : 20,
    marginBottom : 60,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
    lineHeight: 26, 
  },
  letterContainer: {
    flexDirection: "row",
    marginBottom : 10,

  },
  boldText: {
    fontWeight: 'bold',
  },
});
