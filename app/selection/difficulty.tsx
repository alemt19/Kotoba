import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import React from "react";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Difficulty() {
  const router = useRouter();
  const { category } = useLocalSearchParams();
  const insets = useSafeAreaInsets();

  const handlePress = (difficulty: string) => {
    router.push({
      pathname: "/selection/game",
      params: {
        difficulty: difficulty,
        category: category
      }
    });
  };
    return(
        <View style={[styles.container, {paddingTop : insets.top, paddingBottom : insets.bottom}]}>
            <TouchableOpacity style={styles.difficultyButton} onPress={() => handlePress('3')}>
                <Text style={styles.text}>3 letras</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.difficultyButton} onPress={() => handlePress('4')}>
                <Text style={styles.text}>4 letras</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.difficultyButton} onPress={() => handlePress('5')}>
                <Text style={styles.text}>5 letras</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.difficultyButton} onPress={() => handlePress('6')}>
                <Text style={styles.text}>6 letras</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center"
  },
  container: {
    flex: 1,
    margin: 15,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center'
  },
  difficultyButton: {
    backgroundColor: '#3F8EFC',
    shadowColor: '#007bff',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    justifyContent: "center",
    borderRadius: 15,
    marginVertical: 20,
    marginHorizontal: 60,
    paddingVertical: 30
  },
});
