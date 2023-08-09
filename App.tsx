import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import styles from './style/styles';


export default function App(){
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Nome do Evento</Text>
    </SafeAreaView>
  );
}