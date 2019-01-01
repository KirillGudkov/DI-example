import * as screens from './routeName';
import {createStackNavigator, NavigationContainer, createAppContainer} from 'react-navigation';
import Home from "../Screen/Home/Home";
import Profile from "../Screen/Profile/Profile";

const Navigator: NavigationContainer = createStackNavigator(
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
export const AppNavigator: NavigationContainer = createAppContainer(Navigator);
