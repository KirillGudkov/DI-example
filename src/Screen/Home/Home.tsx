import React from 'react';
import {View, Button} from 'react-native';
import {HomePresenter} from "../../Presenter/HomePresenter";
import {HomeView} from "../../View/HomeView";
import BaseComponent from "../../Component/BaseComponent";
import {PROFILE} from "../../Navigation/routeName";
import {style} from "./style";
import {inject, bind, injectedProperty} from 'dependency-injector';

export default class Home extends BaseComponent implements HomeView {

  @inject
  presenter!: HomePresenter;

  @bind
  @injectedProperty
  toProfile(): void {
    this.props.navigation.navigate(PROFILE)
  }

  render() {
    return (
      <View style={style.container}>
        <Button color={'white'} title={'Open profile'} onPress={this.presenter.handleOnPress} />
      </View>
    )
  }
}
