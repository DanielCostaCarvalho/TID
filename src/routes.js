import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
// import { createStackNavigator } from 'react-navigation-stack';

import Textos from './pages/Textos';
import SRS from './pages/SRS';

const Routes = createAppContainer(
  createMaterialTopTabNavigator(
    {
      Textos,
      Repetição: SRS,
    },
    {
      tabBarOptions: {
        activeTintColor: '#fefefe',
        labelStyle: {
          fontSize: 20,
        },
        style: {
          backgroundColor: '#000',
        },
      },
    }
    // {
    //   headerLayoutPreset: 'center',
    //   headerBackTitleVisible: false,
    //   defaultNavigationOptions: {
    //     headerStyle: {
    //       backgroundColor: '#004',
    //     },
    //     headerTintColor: '#fff',
    //   },
    // }
  )
);

export default Routes;
