import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import React from "react";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{headerShown: false }} />
        <Stack.Screen name="howToPlay" options={{
          title: 'CÓMO JUGAR',
          headerStyle: styles.header,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 30,
            color: '#fff',
            fontWeight: 'bold'
          },
          }}/>
        <Stack.Screen name="selection/difficulty" options={{
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
        <Stack.Screen name="selection/categories" options={{
                title: 'Categorias',
                headerStyle: styles.header,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  color: "#fff",
                  fontSize: 30,
                  fontWeight: 'bold',
                },
                headerBackVisible: true,
                }}/>
        <Stack.Screen name="selection/game" options={{headerShown: false }} />
      </Stack>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3F8EFC',
    height: 100,
  },
});
