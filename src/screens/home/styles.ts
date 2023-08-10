import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
			backgroundColor: '#00623B',
			flex: 1,
			alignContent: "center"
	},
	contents:{
		backgroundColor: '#FFF',
		flex: 0,
		height: 300,
		margin: 2,
		marginHorizontal: 9, 
		padding: 5,
		borderRadius: 20,
		flexDirection: "row" // Direcionamento do botão
	},
	h1: {
		fontSize: 30,
		fontWeight: "bold",
		color: '#FFFF',
		marginHorizontal: 10
	},
	h2: {
		fontSize: 25, 
		fontWeight: "bold",
	},
	input: {
		backgroundColor: '#00623B',
		flex: 1, //Ocupa o todo o espaço restante
		borderRadius: 30, 
		color: '#FFF',
		height: 56,
		padding: 16,
		margin: 12,
		marginHorizontal: 5,
		marginLeft: 10,
		fontSize: 25,
		fontWeight: "bold",
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
  });
  
  export default styles;