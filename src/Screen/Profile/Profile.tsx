import React from 'react';
import {View, Button} from 'react-native';
import {ProfilePresenter} from "../../Presenter/ProfilePresenter";
import {ProfileView} from "../../View/ProfileView";
import BaseComponent from "../../Component/BaseComponent";
import {style} from './style';
import {bind, inject, viewProperty} from "presenter-injection";

export default class Profile extends BaseComponent implements ProfileView {

  @inject
  presenter!: ProfilePresenter;

  @bind
  @viewProperty
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
