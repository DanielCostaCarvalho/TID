import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ListaTexto from './Components/ListaTexto';
import AdicionarTexto from './Components/AdicionarTexto';
import LerTexto from './Components/LerTexto';
import AdicionarPalavra from './Components/AdicionarPalavra';
// import { Container } from './styles';

const Textos = createAppContainer(
  createStackNavigator(
    {
      Listagem: ListaTexto,
      Adicionar: AdicionarTexto,
      Leitura: LerTexto,
      Palavra: AdicionarPalavra,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#006',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

Textos.navigationOptions = {
  title: 'Textos',
};

export default Textos;
