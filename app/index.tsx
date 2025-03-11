import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
          alignItems: "center"
        },
      ]}>
      <Text style={styles.title}>Kotoba</Text>
      <Text style={styles.kanjis}>言葉</Text>
      <View style={styles.buttonView}>
        <View style={styles.button}>
          <Link style={styles.buttonText} href="/selection/categories">Jugar</Link>
        </View>
        <View style={styles.button}>
          <Link style={styles.buttonText} href="/howToPlay">Como jugar</Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    color: "#3F8EFC",
    fontSize: 50,
    fontWeight: "bold"
  },
  kanjis: {
    color: "#3F8EFC",
    fontSize: 25,
    fontWeight: "bold"
  },
  button: {
    backgroundColor: "#87BFFF",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 25
  },
  buttonText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center"
  },
  buttonView: {
    paddingVertical: 150,
  }
});
