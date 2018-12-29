import React from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {inject, bind, injectedProperty} from 'dependency-injector';
import {HomePresenter} from "../../Presenter/HomePresenter";
import {HomeView} from "../../View/HomeView";
import BaseComponent from "../../Reducer/BaseComponent";
import {PROFILE} from "../../Navigation/routeName";
import {style} from "./style";
import {ReloadButton} from "../../Component/ReloadButton";

export default class Home extends BaseComponent implements HomeView {

  state = {
    number: 0
  };

  @inject
  presenter!: HomePresenter;

  static navigationOptions = ({navigation}: any) => ({
    headerRight: <ReloadButton navigation={navigation} />
  });

  componentDidMount() {
    this.props.navigation.setParams({reset: this.reset});
  }

  @bind
  @injectedProperty
  toProfile(): void {
    this.props.navigation.navigate(PROFILE)
  };

  @bind
  increase() {
    this.setState({number: this.state.number + 1});
  }

  @bind
  reset() {
    this.setState({number: 0});
  }

  render() {
    return (
      <View style={style.container}>
        <Text style={style.number}>{this.state.number}</Text>
        <Button color={'white'} title={'Open profile'} onPress={this.presenter.handleOnPress} />
        <TouchableOpacity style={style.appendButton} onPress={this.increase}>
          <Image style={style.button} source={{uri: 'ic_plus'}} />
        </TouchableOpacity>
      </View>
    )
  }
}
