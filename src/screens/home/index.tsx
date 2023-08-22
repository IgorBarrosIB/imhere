import React, { useState } from "react";
import { Text, SafeAreaView, TextInput, TouchableOpacity, View, ScrollView, FlatList, Alert } from "react-native";
import styles from './styles';

//Componets
import { Participant } from "../../components/Participant";

export function Home(){

  // Estato 
  const [participants, setParticipants] =  useState<string[]>([]);
  const [participantName, setParticipantName] =  useState("");

  //const participants = ['Gustavo'];
  //const participants = [];
  
  function handleParticipantAdd() {
    if(participants.includes(participantName)){
      return Alert.alert("Participante existe", "Já existe um participante com esse nome.");
    }
    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName("");
  }

  function handleParticipantRemoved(name:string){
    return Alert.alert("Remover",`Você clicou em remover o participante ${name} ?`, [
      {
        text: "Não",
        style: "cancel"
      },
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!")
      }
    ]);
  }

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.h1}>Eventos</Text>

        <View style={styles.contentsAdd}>
          <TextInput 
            style={styles.input} 
            placeholder="Nome do participante"
            placeholderTextColor="#FFF"
            onChangeText={setParticipantName}
            value={participantName}
            />

          <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
              <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity> 
        </View>

        <FlatList 
          keyExtractor={item => item}
          data={participants}
          renderItem={({item}) => ( 
            <Participant key={item} name={item} onRemove={() => handleParticipantRemoved(item)}/>
          )}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.FlatListComponent}>
            <Text style={styles.ListEmptyComponent}>Não tem níguem na lista de participantes por favor adicione novas pessoas ao evento.</Text>
          </View>
        }
        />
    
    </SafeAreaView>
  );
}