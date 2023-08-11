import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import styles from "./styles";

export function Participant(){
    function handleParticipantRemove(){
        alert('teste');
    }

    return(
        <View style={styles.contentsList}>
            <Text style={styles.name}>Igor Barros</Text>
            <TouchableOpacity style={styles.button} onPress={handleParticipantRemove}>
              <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity> 
        </View>
    )
} 