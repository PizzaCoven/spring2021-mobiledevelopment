import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Name from './components/Name';
import Food from './components/Food';

export default function App() {
  return (
    <View style={styles.container}>
      <Name/>
      <Food/>
      <StatusBar style="auto" />
    </View>
  );
}

