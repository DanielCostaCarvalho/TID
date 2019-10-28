import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { SelectableText } from '@astrocoders/react-native-selectable-text';

import { Title } from './styles';

export default function LerTexto({ navigation }) {
  const { texto } = navigation.state.params;
  return (
    <ScrollView>
      <Title>Título: {texto.titulo}</Title>
      <SelectableText
        menuItems={['Adicionar']}
        onSelection={({ eventType, content, selectionStart, selectionEnd }) => {
          if (eventType == 'Adicionar') {
            navigation.goBack();
          }
        }}
        value={texto.texto}
      />
    </ScrollView>
  );
}
