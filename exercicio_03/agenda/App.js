import React, {useState} from 'react';
import { Button, FlatList, StyleSheet, TextInput, Text, View } from 'react-native';

export default function App() {
  const [contato, setContato] = useState(0);
  const [contatos, setContatos] = useState([]);
  const [contadorContatos, setContadorContatos] = useState(0);
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

	const adicionarContato = () => {
		setContatos(contatos => [...contatos,contato]);
		console.log(contatos);
		setContadorContatos(contadorContatos + 1)
			
		return [...contatos, {key: contadorContatos.toString(), nome: contato.nome, numero: contato.numero}]
	}


  return (

			<View style={styles.container} >
      	<View style={styles.lembreteInputView} >
			    <TextInput placeholder="Nome" 
						style={styles.lembreteTextInput}
			      onChangeText={capturarContatoNome}
			      value={contato.nome}
					/>
			    <TextInput placeholder="Telefone" 
						style={styles.lembreteTextInput}
			      onChangeText={capturarContatoNumero}
			      value={contato.numero}
					/>
			    <Button  title="+" onPress={adicionarContato} />
				</View>
				<View style={{alignItems: 'center'}}>
			    <FlatList
			     data = {contatos}
			     renderItem = {
			       contato => (
								<View style={styles.itemNaLista}>
								<Text>{contato.item.nome} - telefone: {contato.item.numero} </Text>
						    </View>)
					}
			     keyExtractor={contato => (contato.key)}
			    />
				</View>
			</View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 50,
		flex:1
	},
	lembreteInputView:{
    alignItems: 'center',
		marginBottom: 12
	},
	lembreteTextInput:{
    borderBottomColor: '#CCC', 
    borderBottomWidth:1, 
		marginBottom: 4,
		padding:2,
		width: '80%',
		textAlign: 'center'

	},
	lembreteInputButton:{
    width: '80%'
	},
	itemNaLista:{
    padding:12,
		borderColor: "#CCC",
		borderWidth: 1,
		marginBottom: 8,
		borderRadius: 8,
		alignItems: 'center'
	},
}	
);




