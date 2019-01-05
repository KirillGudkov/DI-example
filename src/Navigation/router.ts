import * as screens from './routeName';
import {createStackNavigator, NavigationContainer, createAppContainer} from 'react-navigation';
import Home from "../Screen/Home/Home";
import Settings from "../Screen/Settings/Settings";
import {Util} from "../Util";
import {Colors} from "../Screen/Colors";

const Navigator: NavigationContainer = createStackNavigator(
  {
    [screens.HOME]: {
      screen: Home,
      navigationOptions: ({screenProps}: any) => {
        return {
          headerStyle: {
            headerTintColor: screenProps.themeStore.theme.accentColor,
            backgroundColor: Util.shadeColor(screenProps.backgroundColor, 6),
          },
          headerTitleStyle: {
            color: screenProps.color
          },
          headerTitle: 'React Native SandBox'
        }
      }
    },
    [screens.SETTINGS]: {
      screen: Settings,
      navigationOptions: ({screenProps}: any) => {
        return {
          headerTintColor: screenProps.accentColor,
          headerStyle: {
            backgroundColor: Util.shadeColor(screenProps.backgroundColor, 6),
          },
          headerTitleStyle: {
            color: screenProps.color
          },
          headerTitle: screens.SETTINGS
        }
      }
    },
    [screens.COLORS]: {
      screen: Colors,
      navigationOptions: ({screenProps}: any) => {
        return {
          headerTintColor: screenProps.themeStore.theme.accentColor,
          headerStyle: {
            backgroundColor: Util.shadeColor(screenProps.themeStore.theme.backgroundColor, 6),
          },
          headerTitleStyle: {
            color: screenProps.themeStore.theme.color
          },
          headerTitle: screens.COLORS
        }
      }
    }
  }
);

export const AppNavigator: NavigationContainer = createAppContainer(Navigator);
