import React from "react";
import { Text, SafeAreaView } from "react-native";
import styles from './styles';


export function Home(){
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Nome do Evento</Text>
    </SafeAreaView>
  );
}