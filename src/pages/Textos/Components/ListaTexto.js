import React from 'react';
import { FlatList, Text, Button } from 'react-native';

import Texto from '../../../models/Texto';
// import { Container } from './styles';

const dados = Texto.findAll();

export default function ListaTexto({ navigation }) {
  return (
    <>
      <Button
        onPress={() => {
          navigation.navigate('Adicionar');
        }}
        title="Adicionar"
      />
      <FlatList
        data={dados}
        keyExtractor={dado => String(dado.titulo)}
        renderItem={({ item }) => <Text>{item.titulo}</Text>}
      />
    </>
  );
}

ListaTexto.navigationOptions = {
  title: 'Listagem de Textos',
};
