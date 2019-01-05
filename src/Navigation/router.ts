import * as screens from './routeName';
import {createStackNavigator, NavigationContainer, createAppContainer} from 'react-navigation';
import Home from "../Screen/Home/Home";
import Settings from "../Screen/Settings/Settings";
import {Util} from "../Util";

const Navigator: NavigationContainer = createStackNavigator(
  {
    [screens.HOME]: {
      screen: Home,
      navigationOptions: ({screenProps}: any) => {
        return {
          headerStyle: {
            backgroundColor: Util.shadeColor(screenProps.themeStore.theme.backgroundColor, 6),
          },
          headerTitleStyle: {
            color: screenProps.themeStore.theme.color
          },
          headerTitle: 'Home'
        }
      }
    },
    [screens.PROFILE]: {
      screen: Settings,
      navigationOptions: ({screenProps}: any) => {
        return {
          headerStyle: {
            backgroundColor: Util.shadeColor(screenProps.themeStore.theme.backgroundColor, 6),
          },
          headerTitleStyle: {
            color: screenProps.themeStore.theme.color
          },
          headerTitle: 'Settings'
        }
      }
    }
  }
);

export const AppNavigator: NavigationContainer = createAppContainer(Navigator);
