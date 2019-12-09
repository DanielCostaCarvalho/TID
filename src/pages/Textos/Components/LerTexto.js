import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { SelectableText } from '@astrocoders/react-native-selectable-text';

import { Textos } from '../../../models';

// import { Title } from './styles';

export default function LerTexto({ navigation }) {
  const { texto } = navigation.state.params;
  return (
    <ScrollView>
      <Title>Título: {texto.titulo}</Title>
      <SelectableText
        menuItems={['Adicionar', 'Tradução']}
        onSelection={({ eventType, content, selectionStart, selectionEnd }) => {
          if (eventType == 'Adicionar') {
            navigation.navigate('Palavra', { content });
          }
          if (eventType == 'Tradução') {
            navigation.navigate('Traducao', { content });
          }
        }}
        value={texto.texto}
      />
      <Button
        mode="outlined"
        onPress={async () => {
          await Textos.remove(texto.id);
          navigation.goBack();
        }}
        icon="minus"
        color="#333"
      >
        Remover
      </Button>
    </ScrollView>
  );
}
