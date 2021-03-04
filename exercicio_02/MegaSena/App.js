import React, {useState} from 'react';
import { Text, View, Button } from 'react-native';


export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			numeros : [0, 0, 0, 0, 0, 0]
		}
	}

  generateNumbers(){
	  var numbers = [];
		while (numbers.length <=5) { 
			var random = (Math.floor(Math.random() * 60))+1;
			if (!(numbers.includes(random))) {
			    numbers.push(random);
			}
		}

		return numbers

	}



	render(){
		return (
			<View style={{padding:50}}>
				<Text>{`${this.state.numeros[0]} ` + 
						   `${this.state.numeros[1]} ` +
						   `${this.state.numeros[2]} ` +
						   `${this.state.numeros[3]} ` +
						   `${this.state.numeros[4]} ` +
						   `${this.state.numeros[5]} ` }
				</Text>
				<Button title="Alterar Texto" 
					onPress={() => { 
							this.setState(
									{numeros: this.generateNumbers()})}
					}/>
			</View>
		);
	}
}



