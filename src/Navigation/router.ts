import * as screens from './routeName';
import {createStackNavigator, createNavigationContainer} from 'react-navigation';
import Home from "../Screen/Home/Home";
import Profile from "../Screen/Profile/Profile";

const Navigator = createStackNavigator(
  {
    [screens.HOME]: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Home',
      }
    },
    [screens.PROFILE]: {
      screen: Profile,
      navigationOptions: {
        headerTitle: 'Profile'
      }
    }
  }
);
export const AppNavigator = createNavigationContainer(Navigator);
