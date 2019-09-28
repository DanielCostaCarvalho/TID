import React from 'react';
import { Text, TextInput } from 'react-native';

// import { Container } from './styles';

export default function AdicionarTexto() {
  return (
    <>
      <Text>Título</Text>
      <TextInput>Oi</TextInput>
    </>
  );
}

AdicionarTexto.navigationOptions = {
  title: 'Adicionar Textos',
};
