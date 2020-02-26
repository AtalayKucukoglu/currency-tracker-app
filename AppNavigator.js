import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/home';
import ListAllScreen from './screens/listAll';
import ExchangeScreen from './screens/exchange';
import CompareScreen from './screens/compare';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen, 
      navigationOptions: {
        headerShown: false,
      }
    },
    'List All': ListAllScreen,
    Exchange: ExchangeScreen,
    Compare: CompareScreen,
  },
  {
    initialRouteName: 'Home',
    // defaultNavigationOptions: {
    //   headerShown: false,
    // }
  },
);  

const AppContainer = createAppContainer(RootStack);

export default AppContainer;