import React from 'react';
import { FlatList, Text, Button } from 'react-native';

import Texto from '../../../models/Texto';
import { List, Container, Title, Excerpt, TextButton } from './styles';

const dados = Texto.findAll();

export default function ListaTexto({ navigation }) {
  return (
    <Container>
      <Button
        onPress={() => {
          navigation.navigate('Adicionar');
        }}
        title="Adicionar"
      />
      <List
        data={dados}
        keyExtractor={dado => String(dado.titulo)}
        renderItem={({ item }) => {
          return (
            <TextButton>
              <Title>{item.titulo}</Title>
              <Excerpt>{item.texto}</Excerpt>
            </TextButton>
          );
        }}
      />
    </Container>
  );
}

ListaTexto.navigationOptions = {
  title: 'Listagem de Textos',
};
