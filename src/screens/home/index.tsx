import React from "react";
import { Text, SafeAreaView, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import styles from './styles';

//Componets
import { Participant } from "../../components/Participant";



export function Home(){
  const participants = ['Igor Barros', 'Gabriel Teles', 'Gustavo Santos', 'Rodrigo Duarte', 'Jhonata', 'Mario', 'Marcio Malta', 'Marcio Gomes', 'Ellen', 'Taina', 'Jaqueline', 'Eliana', 'Paulo', 'Civio', 'Jaime'];
  
  function handleParticipantAdd() {
    alert('Testando');
  }

  function handleParticipantRemoved(name:string){
    alert(`Removendo: ${name}`);
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

        <ScrollView showsVerticalScrollIndicator={false}>
          {
            participants.map(participant => (
              <Participant key={participant} name={participant} onRemove={() => handleParticipantRemoved('Igor')}/>
            ))
          }
      </ScrollView>


    </SafeAreaView>
  );
}