import React, {Fragment} from 'react'
import {Image, StatusBar, StyleSheet, View} from 'react-native';
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

DIBuilder.build(DITypes);

const avatar = {uri: 'https://i.pinimg.com/736x/ea/f2/2e/eaf22e6a189f76ed24054e2ca7feb00f.jpg'};

interface Props {
  themeStore: ThemeStore
}

@observer
class Application extends React.Component<Props, {}> {

  notification!: Notification;

  @bind
  showNotification() {
    this.notification.show();
  }

  @bind
  hideNotification() {
    this.notification.hide();
  }

  @bind
  private createRef(node: Notification) {
    this.notification = node
  }

  private renderCustomNotification(color: string) {
    return (
      <View style={style.notificationContainer}>
        <Image source={avatar} style={style.avatar} />
        <View style={style.textContainer}>
          <TextView style={{color: color, fontWeight: '600'}}>Tony Stark</TextView>
          <TextView style={{color: color, fontSize: 14}}>Hey how's it going? I'm looking for you all day!</TextView>
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
        <AppNavigator screenProps={{themeStore, color, backgroundColor, accentColor, showNotification: this.showNotification}} />
        <Notification
          onPress={this.hideNotification}
          autohide={false}
          ref={this.createRef}
          textColor={color}
          customComponent={this.renderCustomNotification(color)} />
      </Fragment>
    )
  }
}

const style = StyleSheet.create({
  notificationContainer: {
    flex: 1,
    marginHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  textContainer: {
    flex: 1,
    marginLeft: 8
  }
});

const _App = () => (
  <Provider store={store}>
    <Application themeStore={themeStore} />
  </Provider>
);

export default _App;
