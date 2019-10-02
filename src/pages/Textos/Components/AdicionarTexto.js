import React, { useState } from 'react';
import { Button } from 'react-native';

import Texto from '../../../models/Texto';

import { Container, InputTitle, Title, InputText } from './styles';

export default function AdicionarTexto() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState(false);

  const handleAddText = () => {
    Texto.create({ titulo: title, texto: text });
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
