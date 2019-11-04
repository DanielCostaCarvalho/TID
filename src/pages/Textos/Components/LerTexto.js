import React, { useEffect } from 'react';
import { ScrollView, Button } from 'react-native';
import { SelectableText } from '@astrocoders/react-native-selectable-text';

import { Textos } from '../../../models';

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
            navigation.navigate('Palavra', { content });
          }
        }}
        value={texto.texto}
      />
      <Button
        onPress={async () => {
          await Textos.remove(texto.id);
          navigation.goBack();
        }}
        title="Remover"
      />
    </ScrollView>
  );
}
