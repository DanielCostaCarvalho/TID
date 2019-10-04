import React, { useEffect } from 'react';
import { Text } from 'react-native';

// import { Container } from './styles';

export default function LerTexto({ navigation }) {
  const { texto } = navigation.state.params;
  return (
    <>
      <Text>{texto.titulo}</Text>
      <Text>{texto.texto}</Text>
    </>
  );
}
