import React from 'react';
import {View} from 'react-native';
import {HomePresenter} from "../../Presenter/HomePresenter";
import BaseComponent from "../../Component/BaseComponent";
import {PROFILE} from "../../Navigation/routeName";
import {HomeView} from "../../View/HomeView";
import {style} from "./style";
import {connect} from "react-redux";
import IOSButton from "../../Component/iOSButton/IOSButton";
import {bind, inject, viewProperty} from "mvp-di";

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
        <IOSButton filled tintColor={'#007aff'} title={'Open profile'} onPress={this.presenter.handleOnPress} />
        <View style={style.hiWrapper}>
          <IOSButton tintColor={'#007aff'} title={'Say hi'} onPress={this.presenter.sayHi} />
        </View>
      </View>
    )
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(Home);
