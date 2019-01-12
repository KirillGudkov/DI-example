import React, {Fragment} from 'react'
import {StatusBar, StyleSheet, Animated} from 'react-native';
import {Provider} from 'react-redux';
import {store} from "./Config/reduxStoreConfig";
import {AppNavigator} from "./Navigation/router";
import DITypes from "./Config/DITypes";
import {bind, DIBuilder} from "mvp-di";
import {ThemeStore, themeStore} from "./MobX/ThemeStore";
import {observer} from "mobx-react";
import {LightTheme} from "./MobX/LightTheme";
import {Notification} from "react-native-in-app-message";
import {TextView} from "./TextView";
import {
  ForceTouchGestureHandlerGestureEvent,
  ForceTouchGestureHandlerStateChangeEvent,
  State
} from "react-native-gesture-handler";
import {NavigationContainer} from "react-navigation";
import {SHOW_NOTIFICATION} from "./Navigation/routeName";

DIBuilder.build(DITypes);

const avatar = {uri: 'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/10/18/Pictures/_5fb51944-d2ee-11e8-841e-211dfd3178e1.jpg'};

interface Props {
  themeStore: ThemeStore
}

@observer
class Application extends React.Component<Props, {}> {

  force = new Animated.Value(0);

  navigation!: NavigationContainer;

  @bind
  onPress() {
    Notification.hide();
    (this.navigation as any)._navigation.navigate(SHOW_NOTIFICATION, {
      image: avatar.uri,
      title: 'Iron Man'
    });
  }

  onForceTouchStateChange = (event: ForceTouchGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      this.force.setValue(0);
    }
  };

  @bind
  onForceTouch(event: ForceTouchGestureHandlerGestureEvent) {
    const {force} = event.nativeEvent;
    Animated.timing(this.force, {
      toValue: force,
      duration: 0,
    }).start();
  };

  private renderCustomNotification(color: string) {
    return (
      <Animated.View style={style.notification}>
        <Animated.View style={style.textContainer}>
          <TextView style={{color: color, fontWeight: '600'}}>Iron Man</TextView>
          <TextView style={{color: color, fontSize: 14}}>
            Iron Man (Anthony Edward "Tony" Stark) is a fictional superhero appearing in American comic books
            published by Marvel Comics.
          </TextView>
        </Animated.View>
      </Animated.View>
    )
  }

  render(): React.ReactNode {
    const {themeStore} = this.props;
    const {color, backgroundColor, accentColor} = themeStore.theme;
    const barStyle = themeStore.theme instanceof LightTheme ? 'dark-content' : 'light-content';
    return (
      <Fragment>
        <StatusBar barStyle={barStyle} />
        <AppNavigator ref={(node: any) => this.navigation = node}
                      screenProps={{themeStore, color, backgroundColor, accentColor}} />
        <Notification
          style={{
            transform: [{
              scale: this.force.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.03],
              })
            }]
          }}
          onPress={this.onPress}
          useForceTouch={true}
          onForceTouchGestureEvent={this.onForceTouch}
          onForceTouchHandlerStateChange={this.onForceTouchStateChange}
          autohide={false}
          textColor={color}
          customComponent={this.renderCustomNotification(color)} />
      </Fragment>
    )
  }
}

const style = StyleSheet.create({
  notification: {
    borderRadius: 12,
    marginHorizontal: 12,
    overflow: 'hidden',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    width: '100%',
    height: 150,
  },
  textContainer: {
    width: '100%',
    paddingVertical: 32,
    paddingHorizontal: 12,
    marginTop: 12,
    marginLeft: 8
  }
});

const _App = () => (
  <Provider store={store}>
    <Application themeStore={themeStore} />
  </Provider>
);

export default _App;
