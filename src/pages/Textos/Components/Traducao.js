import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';

export default function Traducao(props) {
  const { navigation } = props;
  const { content } = navigation.state.params;

  const expressao = encodeURI(content);

  return (
    <WebView
      source={{
        uri: `https://www.deepl.com/pt-BR/translator#en/pt/${expressao}`,
      }}
    />
  );
}

Traducao.navigationOptions = {
  title: 'Tradução',
};
