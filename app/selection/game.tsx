import { Text, View, StyleSheet, Image } from 'react-native';
import Letter from '@/components/letter';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import wordsData from '@/assets/words.json'

export default function Game() {
  const { category, difficulty } = useLocalSearchParams();
  const words: string[] = (wordsData as any)[difficulty.toString()]?.[category.toString()] || [];
  let word = '';

  if (words.length > 0) {
    const randomIndex = Math.floor(Math.random() * words.length);
    word = words[randomIndex];
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.icon} source={require('@/assets/images/help.png')}/>
        <Text style={styles.title}>Kotoba</Text>
        <Image style={styles.icon} source={require('@/assets/images/settings.png')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  }
});