import React, { useEffect, useState } from 'react';
import { FlatList, Text, Button } from 'react-native';

import { Textos } from '../../../models';
import { List, Container, Title, Excerpt, TextButton } from './styles';

export default function ListaTexto({ navigation }) {
  const [dados, setDados] = useState([]);
  const [buscar, setBuscar] = useState(false);

  Textos.onChange(() => setBuscar(true));

  useEffect(() => {
    async function fetchData() {
      setDados(await Textos.data());
    }
    fetchData();
    setBuscar(false);
  }, [buscar, dados]);

  const handleToReader = texto => {
    navigation.navigate('Leitura', { texto });
  };

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
        keyExtractor={dado => String(dado.id)}
        renderItem={({ item }) => {
          return (
            <TextButton onPress={() => handleToReader(item)}>
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
