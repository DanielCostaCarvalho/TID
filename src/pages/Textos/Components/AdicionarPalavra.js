import React, { useState, useEffect } from 'react';
import { Button, TextInput } from 'react-native-paper';

import { Expressoes } from '../../../models';

import { Container } from './styles';

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
      <TextInput
        mode="outlined"
        label="Palavra"
        placeholder="Insira a palavra aqui"
        value={word}
        onChangeText={palavra => setWord(palavra)}
        returnKeyType="next"
      />
      <TextInput
        mode="outlined"
        label="Tradução"
        placeholder="Insira a tradução aqui"
        returnKeyType="send"
        onSubmitEditing={handleAddWord}
        onChangeText={traducao => setTranslation(traducao)}
        value={translation}
      />
      <Button
        mode="contained"
        dark
        onPress={handleAddWord}
        icon="plus"
        color="#333"
      >
        Adicionar
      </Button>
    </Container>
  );
}

AdicionarTexto.navigationOptions = {
  title: 'Adicionar palavra',
};
