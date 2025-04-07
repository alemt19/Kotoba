import { StyleSheet, View, Text, Image } from 'react-native';
import { Stack,Link } from "expo-router"
export default function Difficulty() {
    return(
        <View style={{
                flex: 1,
                flexDirection: "column",
            }}>
              <Stack.Screen name="dificult" options={{
                      title: 'Dificultad',
                      headerStyle: styles.header,
                      headerTitleAlign: 'center',
                      headerTitleStyle: {
                        color: "#fff",
                        fontSize: 30,
                        fontWeight: 'bold',
                      },
                      headerBackVisible: true,
                      }}/>
                
                <View
                    style={[
                    styles.container,
                    {
                        flexDirection: 'column',
                        alignItems: "center"
                    },
                    ]}>
                    <View style={styles.container}>
                        <View style={styles.textContainer}>
                            <Link style={styles.text} href={{
                                pathname: "./difficulty",
                                params: {
                                    category: "lugares"
                                }
                                }}>3 letras</Link>
                        </View>
                        
                    </View>
                    
                    <View style={styles.container}>
                        <View style={styles.textContainer}>
                            <Link style={styles.text} href={{
                                pathname: "./difficulty",
                                params: {
                                    category: "musica"
                                }
                                }}>4 letras</Link>
                        </View>
                        
                    </View>
                    
                    <View style={styles.container}>
                        <View style={styles.textContainer}>
                            <Link style={styles.text} href={{
                                pathname: "./difficulty",
                                params: {
                                    category: "comida"
                                }
                                }}>5 letras</Link>
                        </View>
                        
                    </View>
                    
                    <View style={styles.container}>
                        <View style={styles.textContainer}>
                            <Link style={styles.text} href={{
                                pathname: "./game",
                                params: {
                                    category: "palabras simples"
                                }
                                }}>6 letras</Link>
                        </View>
                        
                    </View>
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
    textAlign: "center"
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
    maxHeight:500
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
    borderRadius:8,
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
