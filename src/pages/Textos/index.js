import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ListaTexto from './Components/ListaTexto';
import AdicionarTexto from './Components/AdicionarTexto';
// import { Container } from './styles';

const Textos = createAppContainer(
  createStackNavigator(
    {
      Litagem: ListaTexto,
      Adicionar: AdicionarTexto,
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
