import React from 'react';
import { Button } from 'react-native-paper';

import { Container } from './styles';

export default function Inicio({ navigation }) {
  const handleToTrainning = () => {
    navigation.navigate('Treino');
  };

  return (
    <Container>
      <Button
        mode="outlined"
        onPress={() => handleToTrainning()}
        icon="play"
        color="#333"
      >
        Iniciar treino
      </Button>
    </Container>
  );
}
