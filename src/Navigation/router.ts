import * as screens from './routeName';
import {createStackNavigator, NavigationContainer, createAppContainer} from 'react-navigation';
import Home from "../Screen/Home/Home";
import Settings from "../Screen/Settings/Settings";
import {Util} from "../Util";
import {Colors} from "../Screen/Colors";
import {ShowNotification} from "../Screen/ShowNotification";
import {human} from 'react-native-typography'

const Navigator: NavigationContainer = createStackNavigator(
  {
    [screens.HOME]: {
      screen: Home,
      navigationOptions: ({screenProps}: any) => {
        return {
          headerStyle: {
            headerTintColor: screenProps.accentColor,
            backgroundColor: Util.shadeColor(screenProps.backgroundColor, 6),
          },
          headerTitleStyle: [human.headline, {
            color: screenProps.color,
          }],
          headerTitle: screens.HOME
        }
      }
    },
    [screens.SHOW_NOTIFICATION]: {
      screen: ShowNotification,
      navigationOptions: ({screenProps}: any) => {
        return {
          headerTintColor: screenProps.accentColor,
          headerStyle: {
            backgroundColor: Util.shadeColor(screenProps.backgroundColor, 6),
          },
          headerTitleStyle: [human.headline, {
            color: screenProps.color,
          }],
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
          headerTitleStyle: [human.headline, {
            color: screenProps.color,
          }],
          headerTitle: screens.SETTINGS,
        }
      },
    },
    [screens.COLORS]: {
      screen: Colors,
      navigationOptions: ({screenProps}: any) => {
        return {
          headerTintColor: screenProps.accentColor,
          headerStyle: {
            backgroundColor: Util.shadeColor(screenProps.backgroundColor, 6),
          },
          headerTitleStyle: [human.headline, {
            color: screenProps.color,
          }],
          headerTitle: screens.COLORS
        }
      }
    }
  }
);

export const AppNavigator: NavigationContainer = createAppContainer(Navigator);

// TabBar example
//
//     [screens.HOME]: {
//       screen: Home,
//       navigationOptions: (args: any) => {
//         const {accentColor, backgroundColor} = args.screenProps.themeStore.theme;
//         const bg = Util.shadeColor(backgroundColor, 6);
//         return {
//           header: null,
//           tabBarOptions: {
//             activeTintColor: accentColor,
//             activeBackgroundColor: bg,
//             inactiveBackgroundColor: bg
//           },
//           tabBarIcon: (args: any) => <Image style={[style.icon, {tintColor: args.focused ? args.tintColor : '#888'}]} source={{uri: 'ic_home'}} />,
//       }
//       }
//     },
