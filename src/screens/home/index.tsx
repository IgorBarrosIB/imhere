import React from "react";
import { Text, SafeAreaView, TextInput, TouchableOpacity, View } from "react-native";
import styles from './styles';

//Componets
import { Participant } from "../../components/Participant";



export function Home(){
  
  function handleParticipantAdd() {
    alert('Testando');
  }

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.h1}>Eventos</Text>

        <View style={styles.contentsAdd}>
          <TextInput 
            style={styles.input} 
            placeholder="Nome do participante"
            placeholderTextColor="#FFF"
            />

          <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
              <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity> 
        </View>
        <Participant/>
        <Participant/>
        <Participant/>
    </SafeAreaView>
  );
}