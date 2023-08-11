import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import styles from "./styles";

type Props = {
    name: string;
    onRemove: () => void;

}

export function Participant(props: Props){
    return(
        <View style={styles.contentsList}>
            <Text style={styles.name}>{props.name}</Text>
            <TouchableOpacity style={styles.button} onPress={props.onRemove}>
              <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity> 
        </View>
    )
} 