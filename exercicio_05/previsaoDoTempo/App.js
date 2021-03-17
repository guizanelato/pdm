import { StatusBar } from 'expo-status-bar';
import React, { useState  } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import PrevisaoItem from './components/PrevisaoItem';

import { API_KEY } from './secrets/WeatherAPIKey';

export default function App() {

  const endPoint_forecast="http://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

  const endPoint_oneCall = "http://api.openweathermap.org/data/2.5/onecall?units=metric&"

  const apiKey= API_KEY;
	const [cidade, setCidade] = useState('');
	const [previsoes, setPrevisoes] = useState([]);

	const capturarCidade = (cidade) => {
		setCidade(cidade);
	}
	
	const obtemPrevisoes = () => {
    setPrevisoes([]);
		const target = endPoint_forecast+cidade+"&appid="+apiKey;
   
		fetch(target)
			.then((dados) => dados.json())
			.then((dados) => {
				const obj = dados.city.coord
				fetch(endPoint_oneCall+"lat="+obj.lat+"&lon="+obj.lon+"&exclude=hourly,daily&appid="+apiKey)
					.then((dados_oneCall) => dados_oneCall.json())
					.then((dados_oneCall) => {
						setPrevisoes([dados_oneCall.current])
						Keyboard.dismiss();
					})

			});
	}
	

  return (
    <View style={styles.container}>
			<View style={styles.entrada}>
			  <TextInput
			    style={styles.nomeCidade}
			    placeholder="Digite o nome de uma Cidade"
			    value={cidade}
			    onChangeText={capturarCidade}
			  />
			  <Button
			    title="Ok"
			    onPress={obtemPrevisoes}
			  />
			</View>
			<FlatList
			  data = {previsoes}
			  renderItem={
					previsao => (
            <PrevisaoItem previsao={previsao} cidade={cidade} />
					)
				}
			/>
    </View>
	);
}

const styles = StyleSheet.create({
  container: {
		padding: 40,
		flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
  },
	nomeCidade:{
		padding:10,
		borderBottomColor: '#BB96F3',
		borderBottomWidth: 2,
		textAlign: 'left',
		flexGrow: 0.9
	},
	entrada:{
    flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 8
	},
});
