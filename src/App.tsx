import React, {Fragment} from 'react'
import {Image, StatusBar, StyleSheet, Animated, TouchableOpacity, View} from 'react-native';
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
import {BlurView} from "react-native-blur";

DIBuilder.build(DITypes);

const avatar = {uri: 'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/10/18/Pictures/_5fb51944-d2ee-11e8-841e-211dfd3178e1.jpg'};

interface Props {
  themeStore: ThemeStore
}

@observer
class Application extends React.Component<Props, {}> {


  @bind
  onOkPress() {

  }

  private renderCustomNotification(color: string) {
    return (
      <View style={style.notification}>
        <View style={style.notificationContainer}>
          <Image resizeMethod={'resize'} source={avatar} style={style.avatar} />
          <View style={style.textContainer}>
            <TextView style={{color: color, fontWeight: '600'}}>Iron Man</TextView>
            <TextView style={{color: color, fontSize: 14}}>Iron Man (Anthony Edward "Tony" Stark) is a fictional superhero appearing in American comic books published by Marvel Comics.</TextView>
          </View>
        </View>
        <View style={style.buttonsContainer}>
          <BlurView style={style.leftButtonBlur} blurAmount={10} blurType={'light'} />
          <TouchableOpacity onPress={() => Notification.hide()} style={style.button}>
            <TextView style={{color, fontSize: 15}}>Close</TextView>
          </TouchableOpacity>
          <View style={[style.buttonDivider, {backgroundColor: color}]} />
          <BlurView style={style.rightButtonBlur} blurAmount={10} blurType={'light'} />
          <TouchableOpacity onPress={this.onOkPress} style={style.button}>
            <TextView style={{color, fontSize: 15}}>Read more</TextView>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render(): React.ReactNode {
    const {themeStore} = this.props;
    const {color, backgroundColor, accentColor} = themeStore.theme;
    const barStyle = themeStore.theme instanceof LightTheme ? 'dark-content' : 'light-content';
    return (
      <Fragment>
        <StatusBar barStyle={barStyle} />
        <AppNavigator screenProps={{themeStore, color, backgroundColor, accentColor}} />
        <Notification
          showKnob={false}
          onPress={() => Notification.hide()}
          autohide={false}
          textColor={color}
          customComponent={this.renderCustomNotification(color)} />
      </Fragment>
    )
  }
}

const style = StyleSheet.create({
  notificationContainer: {
    flex: 1,
    width: '100%',
    marginHorizontal: 12,
    alignItems: 'center'
  },
  buttonsContainer: {
    flex: 1,
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    width: '100%'
  },
  notification: {
    borderRadius: 12,
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
    paddingHorizontal: 8,
    marginTop: 12,
    marginLeft: 8
  },
  leftButtonBlur: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '50%',
    height: '100%',
    opacity: 0.3,
  },
  rightButtonBlur: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '50%',
    height: '100%',
    opacity: 0.3,
  },
  button: {
    flex: 1,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonDivider: {
    width: 1,
    height: 20,
    opacity: 0.3
  },
});

const _App = () => (
  <Provider store={store}>
    <Application themeStore={themeStore} />
  </Provider>
);

export default _App;
