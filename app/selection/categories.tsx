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
    <View style={{
        flex: 1,
        flexDirection: "column"
    }}>
        <View
            style={[
            styles.container,
            {
                flexDirection: 'column',
                alignItems: "center"
            },
            ]}>
            <TouchableOpacity style={styles.container} onPress={() => handlePress('lugares')}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Lugares</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('@/assets/images/lugares.jpeg')} resizeMode='cover' style={styles.category_image} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.container} onPress={() => handlePress('musica')}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Música</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('@/assets/images/musica.jpeg')} resizeMode='cover' style={styles.category_image} />
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.container} onPress={() => handlePress('comida')}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Comida</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('@/assets/images/comida.jpeg')} resizeMode='cover' style={styles.category_image} />
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.container} onPress={() => handlePress('palabras-simples')}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Palabras simples</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('@/assets/images/palabras-simples.jpeg')} resizeMode='cover' style={styles.category_image} />
                </View>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3F8EFC',
    height: 90,
    paddingVertical: 15,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  title: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
    
  },
  category: {
    flex: 1,
    flexDirection: "row",
    height: 100
  },
  categoryGradient: {
    backgroundColor: "blue",
    shadowColor: "blue",
    shadowOffset: {width: 100, height: 0},
    height: 100
  },
  container: {
    flex: 1,
    flexDirection: "row",
    margin: 15,
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
  image: {
    width: "100%"
  },
  category_image: {
    height: "100%",
    width: "100%",
  }
});
