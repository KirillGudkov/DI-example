import React from 'react';
import {View, Button, TouchableOpacity, Image} from 'react-native';
import {inject, bind, injectedProperty} from 'dependency-injector';
import {HomePresenter} from "../../Presenter/HomePresenter";
import {HomeView} from "../../View/HomeView";
import BaseComponent from "../../Reducer/BaseComponent";
import {PROFILE} from "../../Navigation/routeName";
import {style} from "./style";
import {ReloadButton} from "../../Component/ReloadButton";
import {Counter} from "../../Component/Counter";

export default class Home extends BaseComponent implements HomeView {

  counter!: Counter;

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
  createRef(node: Counter) {
    this.counter = node;
  }

  @bind
  increase() {
    this.counter.increase();
  }

  @bind
  decrease() {
    this.counter.decrease();
  }

  @bind
  reset() {
    this.counter.reset();
  }

  render() {
    return (
      <View style={style.container}>
        <Counter ref={this.createRef} />
        <Button color={'white'} title={'Open profile'} onPress={this.presenter.handleOnPress} />
        <View style={style.buttonsContainer}>
          <TouchableOpacity style={style.decreaseButton} onPress={this.decrease}>
            <Image style={style.button} source={{uri: 'ic_minus'}} />
          </TouchableOpacity>
          <TouchableOpacity style={style.increaseButton} onPress={this.increase}>
            <Image style={style.button} source={{uri: 'ic_plus'}} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
