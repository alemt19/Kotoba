import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import React from "react";

export default function Categories() {
  const router = useRouter();

  const handlePress = (category: string) => {
    router.push({
      pathname: "/selection/difficulty",
      params: {
        category: category
      }
    });
  };

  return (
        <View
            style={[
            styles.container,
            {
            },
            ]}>
            <TouchableOpacity style={styles.category} onPress={() => handlePress('lugares')}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Lugares</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('@/assets/images/lugares.jpeg')} resizeMode='cover' style={styles.category_image} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.category} onPress={() => handlePress('musica')}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Música</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('@/assets/images/musica.jpeg')} resizeMode='cover' style={styles.category_image} />
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.category} onPress={() => handlePress('comida')}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Comida</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('@/assets/images/comida.jpeg')} resizeMode='cover' style={styles.category_image} />
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.category} onPress={() => handlePress('palabras-simples')}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Palabras simples</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('@/assets/images/palabras-simples.jpeg')} resizeMode='cover' style={styles.category_image} />
                </View>
            </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
  },
  category: {
    flex: 1,
    flexDirection: "row",
    margin: 15,
  },
  container: {
    flex: 1,
    margin: 15,
    flexDirection: 'column',
    alignItems: "center"
  },
  textContainer: {
    flex: 1,
    backgroundColor: '#3F8EFC',
    shadowColor: '#007bff',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: '#ffffff',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10
  },
  category_image: {
    height: "100%",
    width: "100%",
  }
});
