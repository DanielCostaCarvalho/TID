import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';

import { Textos } from '../../../models';

import { Container } from './styles';

export default function AdicionarTexto({ navigation }) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleAddText = async () => {
    await Textos.insert({ titulo: title, texto: text });
    navigation.goBack();
  };

  return (
    <Container>
      <TextInput
        mode="outlined"
        placeholder="Insira o título aqui"
        label="Título"
        value={title}
        onChangeText={titulo => setTitle(titulo)}
        returnKeyType="next"
      />
      <TextInput
        mode="outlined"
        placeholder="Insira o conteúdo do texto aqui"
        label="Texto"
        returnKeyType="send"
        onSubmitEditing={handleAddText}
        onChangeText={texto => setText(texto)}
        value={text}
      />

      <Button
        mode="contained"
        dark
        onPress={handleAddText}
        icon="plus"
        color="#333"
      >
        Adicionar
      </Button>
    </Container>
  );
}

AdicionarTexto.navigationOptions = {
  title: 'Adicionar Textos',
};
