import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Inicio from './Inicio';
import Treino from './Treino';

const SRS = createAppContainer(
  createStackNavigator(
    {
      Inicio,
      Treino,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#333',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

SRS.navigationOptions = {
  title: 'Treinamento',
};

export default SRS;
