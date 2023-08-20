import React from "react";
import { Text, SafeAreaView, TextInput, TouchableOpacity, View, ScrollView, FlatList } from "react-native";
import styles from './styles';

//Componets
import { Participant } from "../../components/Participant";



export function Home(){
  const participants = ['Igor Barros', 'Gabriel Teles', 'Gustavo Santos', 'Rodrigo Duarte', 'Jhonata', 'Mario', 'Marcio Malta', 'Marcio Gomes', 'Ellen', 'Taina', 'Jaqueline', 'Eliana', 'Paulo', 'Civio', 'Jaime'];
  //const participants = [];
  
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

        <FlatList 
          keyExtractor={item => item}
          data={participants}
          renderItem={({item}) => ( 
            <Participant key={item} name={item} onRemove={() => handleParticipantRemoved('Igor')}/>
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