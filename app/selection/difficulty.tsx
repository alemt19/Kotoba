import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import React from "react";

export default function Difficulty() {
  const router = useRouter();

  const handlePress = (difficulty: string) => {
    router.push({
      pathname: "/selection/game",
      params: {
        difficulty: difficulty
      }
    });
  };
    return(
        <View style={styles.container}>
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
    borderRadius: 8,
    marginVertical: 20,
    marginHorizontal: 60,
    paddingVertical: 30
  },
});
