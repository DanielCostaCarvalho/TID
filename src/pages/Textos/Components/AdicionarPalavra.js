import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';

import { Expressoes } from '../../../models';

import { Container, InputTitle, Title, InputText } from './styles';

export default function AdicionarTexto(props) {
  const { navigation } = props;
  const { content } = navigation.state.params;

  const [word, setWord] = useState('');
  const [translation, setTranslation] = useState('');

  useEffect(() => {
    setWord(content);
  }, [content]);

  const handleAddWord = async () => {
    await Expressoes.insert({
      proxtreino: new Date(),
      expressao: word,
      traducao: translation,
      nivel: '0',
    });
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
      <Button title="Adicionar" onPress={handleAddWord} />
    </Container>
  );
}

AdicionarTexto.navigationOptions = {
  title: 'Adicionar palavra',
};
