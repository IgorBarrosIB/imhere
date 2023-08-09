import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";

export default function App(){
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World !!!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  }
})