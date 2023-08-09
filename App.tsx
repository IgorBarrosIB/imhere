import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";

export default function App(){
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Nome do Evento</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignContent: "center"
  },
  text: {
    color: 'white',
    fontWeight: "bold",
    marginTop: 48, 
    fontSize: 24
  }
})