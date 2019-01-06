import React, {Fragment, ReactNode} from 'react'
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from "./Config/reduxStoreConfig";
import {AppNavigator} from "./Navigation/router";
import DITypes from "./Config/DITypes";
import {bind, DIBuilder} from "mvp-di";
import {ThemeStore, themeStore} from "./MobX/ThemeStore";
import {observer} from "mobx-react";
import {LightTheme} from "./MobX/LightTheme";
import {Notification} from "./Component/Noification";

DIBuilder.build(DITypes);

interface Props {
  themeStore: ThemeStore
}

@observer
class Application extends React.Component<Props, {}> {

  notification!: Notification;

  @bind
  showNotification(text: string) {
    this.notification.showNotification();
  }

  @bind
  private createRef(node: Notification) {
    this.notification = node
  }

  render(): React.ReactNode {
    const {themeStore} = this.props;
    const {color, backgroundColor, accentColor} = themeStore.theme;
    const barStyle = themeStore.theme instanceof LightTheme ? 'dark-content' : 'light-content';
    return (
      <Fragment>
        <StatusBar barStyle={barStyle} />
        <AppNavigator screenProps={{
          themeStore: themeStore,
          color,
          backgroundColor,
          accentColor,
          showNotification: this.showNotification
        }} />
        <Notification text={'Hey, whats up?'} ref={this.createRef}
                      theme={{color, backgroundColor, accentColor, theme: themeStore.theme}} />
      </Fragment>
    )
  }
}

const _App = () => (
  <Provider store={store}>
    <Application themeStore={themeStore} />
  </Provider>
);

export default _App;
