import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';

export default function Traducao(props) {
  const { navigation } = props;
  const { content } = navigation.state.params;

  const expressao = content.split(' ').join('-');

  return (
    <WebView
      source={{
        uri: `https://dictionary.cambridge.org/pt/dicionario/ingles-portugues/${expressao}`,
      }}
    />
  );
}

Traducao.navigationOptions = {
  title: 'Tradução',
};
