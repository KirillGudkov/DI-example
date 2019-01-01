import React from 'react';
import {View, Button} from 'react-native';
import {HomePresenter} from "../../Presenter/HomePresenter";
import {bind, inject, injectedProperty} from "presenter-injection";
import BaseComponent from "../../Component/BaseComponent";
import {PROFILE} from "../../Navigation/routeName";
import {HomeView} from "../../View/HomeView";
import {style} from "./style";

export default class Home extends BaseComponent implements HomeView {

  @inject
  presenter!: HomePresenter;

  @bind
  @injectedProperty
  public toProfile(): void {
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
