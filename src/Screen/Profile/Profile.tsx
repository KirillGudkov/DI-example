import React from 'react';
import {View, Button} from 'react-native';
import {bind, inject, injectedProperty} from 'dependency-injector';
import {ProfilePresenter} from "../../Presenter/ProfilePresenter";
import {ProfileView} from "../../View/ProfileView";
import BaseComponent from "../../Component/BaseComponent";
import {style} from './style';

export default class Profile extends BaseComponent implements ProfileView {

  @inject
  presenter!: ProfilePresenter;

  @bind
  @injectedProperty
  goBack() {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={style.container}>
        <Button color={'#fff'} title={'Back'} onPress={this.presenter.handleOnPress} />
      </View>
    )
  }
}
