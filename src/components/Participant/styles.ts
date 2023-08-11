import React from "react";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  contentsList:{
		backgroundColor: '#FFF',
		flex: 0,
		height: 100,
		margin: 2,
		marginHorizontal: 9, 
		padding: 5,
		borderRadius: 20,
    flexDirection: "row", // Direcionamento do botão
    alignItems: "center",
		justifyContent: "center",
	},
  name: {
    color: '#00623B',
    flex: 1,
    fontSize: 25,
		fontWeight: "bold",
    marginHorizontal: 12,
  },
  button: {
		borderRadius: 30, 
		margin: 5,
		marginTop: 20,
		backgroundColor: '#00623B',
		height: 40,
		alignItems: "center",
		justifyContent: "center",
		width: 40,
	},
	buttonText: {
		color: 'white',
		fontSize: 24,
		fontWeight: "bold"
	}
})

export default styles;