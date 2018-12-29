import React from 'react'
import { StatusBar } from 'react-native';
import {Provider} from 'react-redux';
import {store} from "./Config/reduxStoreConfig";
import {AppNavigator} from "./Navigation/router";
import {DIBuilder} from "dependency-injector/src/DIBuilder";
import DITypes from "./Config/DITypes";

DIBuilder.build(DITypes);

const _App = () => (
  <Provider store={store}>
    <StatusBar barStyle={'dark-content'}/>
    <AppNavigator />
  </Provider>
);

export default _App;
