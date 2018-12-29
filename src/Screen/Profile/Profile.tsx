import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {ProfilePresenter} from "../../Presenter/ProfilePresenter";
import {ProfileView} from "../../View/ProfileView";
import {bind, inject, injectedProperty} from 'dependency-injector';
import BaseComponent from "../../Reducer/BaseComponent";
import {HOME} from "../../Navigation/routeName";

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

const style = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#66a1da'}
});
