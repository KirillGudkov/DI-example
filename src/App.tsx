import React, {Fragment} from 'react'
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from "./Config/reduxStoreConfig";
import {AppNavigator} from "./Navigation/router";
import DITypes from "./Config/DITypes";
import {DIBuilder} from "mvp-di";
import {LightTheme, ThemeStore, themeStore} from "./mobX/ThemeStore";
import {observer} from "mobx-react";

DIBuilder.build(DITypes);

interface Props {
  themeStore: ThemeStore
}

@observer
class Application extends React.Component<Props, {}> {
  render(): React.ReactNode {
    const {themeStore} = this.props;
    const barStyle = themeStore.theme instanceof LightTheme ? 'dark-content' : 'light-content';
    return (
      <Fragment>
        <StatusBar barStyle={barStyle} />
        <AppNavigator screenProps={{themeStore: themeStore}} />
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
