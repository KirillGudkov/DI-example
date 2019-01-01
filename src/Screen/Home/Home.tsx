import React from 'react';
import {View, Button} from 'react-native';
import {HomePresenter} from "../../Presenter/HomePresenter";
import {bind, inject, viewProperty} from "presenter-injection";
import BaseComponent from "../../Component/BaseComponent";
import {PROFILE} from "../../Navigation/routeName";
import {HomeView} from "../../View/HomeView";
import {style} from "./style";
import {connect} from "react-redux";

class Home extends BaseComponent implements HomeView {

  @inject
  presenter!: HomePresenter;

  @bind
  @viewProperty
  public dispatch(action: Function): void {
    this.props.dispatch(action);
  }

  @bind
  @viewProperty
  public toProfile(): void {
    this.props.navigation.navigate(PROFILE);
  }

  render() {
    return (
      <View style={style.container}>
        <Button color={'white'} title={'Open profile'} onPress={this.presenter.handleOnPress} />
        <Button color={'white'} title={'Say hi'} onPress={this.presenter.sayHi} />
      </View>
    )
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(Home);
