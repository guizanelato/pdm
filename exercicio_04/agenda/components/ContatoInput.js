import React, { useState } from 'react';
import { Button, View, TextInput, StyleSheet} from 'react-native'



const ContatoInput = (props) => {
	
	const [contato, setContato] = useState(0);


	const capturarContatoNome = contato_nome  => {
  	setContato( estado_anterior => {
		  return {...estado_anterior, nome: contato_nome}
		})
	};

	const capturarContatoNumero = contato_numero => {
		setContato( estado_anterior => {
			return {...estado_anterior, numero: contato_numero}
			}
		)
	}

	return (
	<View style={styles.contatoView}>
				<TextInput 
					placeholder="Nome"
		      style ={styles.contatoInputText}
		      onChangeText={capturarContatoNome}
		      value={contato.nome}
			  />
				<TextInput 
					placeholder="Numero"
		      style ={styles.contatoInputText}
		      onChangeText={capturarContatoNumero}
		      value={contato.numero}
			  />
		  <Button
			  title="+"
			  onPress={() => props.onAdicionarContato(contato)}
			/>
			</View>
	);
}


const styles = 
		StyleSheet.create({
				contatoView: {
						justifyContent: 'space-between',
						alignItems: 'center',
						marginBottom: 8},
				contatoInputText: {
						width: '80%',
						borderBottomColor: 'black',
						borderBottomWidth: 1,
						padding: 2
				}
		});


export default ContatoInput;


