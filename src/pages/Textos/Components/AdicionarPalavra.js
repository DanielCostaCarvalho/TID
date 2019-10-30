import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';

import Texto from '../../../models/Texto';

import { Container, InputTitle, Title, InputText } from './styles';

export default function AdicionarTexto(props) {
  const { navigation } = props;
  const { content } = navigation.state.params;

  const [word, setWord] = useState('');
  const [translation, setTranslation] = useState('');

  useEffect(() => {
    setWord(content);
  }, [content]);

  const handleAddWord = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Title>Palavra</Title>
      <InputTitle
        placeholder="Palavra"
        value={word}
        onChangeText={palavra => setWord(palavra)}
        returnKeyType="next"
      />
      <Title>Tradução</Title>
      <InputText
        placeholder="Tradução"
        returnKeyType="send"
        onSubmitEditing={handleAddWord}
        onChangeText={traducao => setTranslation(traducao)}
        value={translation}
      />
      <Button title="Enviar" onPress={handleAddWord} />
    </Container>
  );
}

AdicionarTexto.navigationOptions = {
  title: 'Adicionar palavra',
};
