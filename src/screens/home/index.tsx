import React from "react";
import { Text, SafeAreaView, TextInput, TouchableOpacity, View } from "react-native";
import styles from './styles';


export function Home(){
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.h1}>Eventos</Text>

        <View style={styles.contents}>
          <TextInput 
            style={styles.input} 
            placeholder="Nome do participante"
            placeholderTextColor="#FFF"
            />

          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Clique aqui</Text>
          </TouchableOpacity>
        </View>
      
    </SafeAreaView>
  );
}