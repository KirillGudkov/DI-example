import React from 'react';
import {View} from 'react-native';
import {ProfilePresenter} from "../../Presenter/ProfilePresenter";
import {ProfileView} from "../../View/ProfileView";
import BaseComponent from "../../Component/BaseComponent";
import {style} from './style';
import IOSButton from "../../Component/iOSButton/IOSButton";
import {bind, inject, viewProperty} from "mvp-di";

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
        <IOSButton filled tintColor={'#007aff'} title={'Back'} onPress={this.presenter.handleOnPress} />
      </View>
    )
  }
}
