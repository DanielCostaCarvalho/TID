import React, { useEffect, useState } from 'react';
import { Button, List } from 'react-native-paper';

import { Textos } from '../../../models';
import { FList, Container, Title, Excerpt, TextButton } from './styles';

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
        mode="outlined"
        color="#333"
        onPress={() => {
          navigation.navigate('Adicionar');
        }}
        icon="playlist-plus"
      >
        Adicionar
      </Button>
      <FList
        data={dados}
        keyExtractor={dado => String(dado.id)}
        renderItem={({ item }) => {
          return (
            <List.Item
              onPress={() => handleToReader(item)}
              title={item.titulo}
              description={item.texto}
              left={() => <List.Icon icon="text" />}
            />
          );
        }}
      />
    </Container>
  );
}

ListaTexto.navigationOptions = {
  title: 'Listagem de Textos',
};
