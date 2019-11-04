import React, { useState } from 'react';
import { Button } from 'react-native';

import { Textos } from '../../../models';

import { Container, InputTitle, Title, InputText } from './styles';

export default function AdicionarTexto({ navigation }) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleAddText = async () => {
    await Textos.insert({ titulo: title, texto: text });
    navigation.goBack();
  };

  return (
    <Container>
      <Title>Título</Title>
      <InputTitle
        placeholder="Título"
        value={title}
        onChangeText={titulo => setTitle(titulo)}
        returnKeyType="next"
      />
      <Title>Texto</Title>
      <InputText
        placeholder="Texto"
        returnKeyType="send"
        onSubmitEditing={handleAddText}
        onChangeText={texto => setText(texto)}
        value={text}
      />
      <Button title="Enviar" onPress={handleAddText} />
    </Container>
  );
}

AdicionarTexto.navigationOptions = {
  title: 'Adicionar Textos',
};
