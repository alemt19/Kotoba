import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false }} />
      <Stack.Screen name="howToPlay" options={{
        title: 'CÓMO JUGAR',
        headerStyle: styles.header,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: 'bold'
        }
        }}/>
    </Stack>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#c9c9c9',
    height: 100
  },
});
