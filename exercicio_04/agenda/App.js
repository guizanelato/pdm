import React, {useState} from 'react';
import { Button, FlatList, StyleSheet, TextInput, Text, View } from 'react-native';
import ContatoItem from './components/ContatoItem';
import ContatoInput from  './components/ContatoInput';

export default function App() {
  const [contatos, setContatos] = useState([]);
  const [contadorContatos, setContadorContatos] = useState(0);

	const adicionarContato = (contato) => {
		setContatos(contatos => {
				setContadorContatos(contadorContatos + 1);
				console.log(contatos);
				return [ 
						{
								key: contadorContatos.toString(), 
								nome: contato.nome, 
								numero: contato.numero}, 
						...contatos
				]
		})
	
	}

	const removerContato = (keyDoContato) => {
		setContatos(contatos => {
			return contatos.filter((contato) => 
				contato.key != keyDoContato.toString());
			})
		};	
	

  return (

			<View style={styles.container} >
				<ContatoInput onAdicionarContato={adicionarContato} />

				<FlatList
			     data = {contatos}
			     renderItem = {
			       contato => (
								<ContatoItem contato={contato.item} 
								 onTouch={() => console.log("item tocado..")}
								 onTouchAndHold={removerContato}
								 chave={contato.item.key}
								 />
						 )
					 }
			     keyExtractor={contato => (contato.key)}
			    />
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
