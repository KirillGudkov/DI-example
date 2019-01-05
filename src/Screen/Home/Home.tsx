import React from 'react';
import {View} from 'react-native';
import {HomePresenter} from "../../Presenter/HomePresenter";
import {SETTINGS} from "../../Navigation/routeName";
import {HomeView} from "../../View/HomeView";
import {style} from "./style";
import {connect} from "react-redux";
import IOSButton from "../../Component/iOSButton/IOSButton";
import {bind, inject, viewProperty} from "mvp-di";
import {DefaultProps} from "../../Config/DefaultProps";
import {DefaultState} from "../../Config/DefaultState";
import {observer} from "mobx-react";
import {AppContainer} from "../../Component/AppContainer";

@observer
class Home extends React.Component<DefaultProps, DefaultState> implements HomeView {

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
    this.props.navigation.navigate(SETTINGS);
  }

  render() {
    const {theme} = this.props.screenProps.themeStore;
    return (
      <AppContainer theme={theme}>
        <View style={style.buttonContainer}>
          <IOSButton filled theme={theme} title={'Open settings'} onPress={this.presenter.handleOnPress} />
          <View style={style.gape} />
          <IOSButton theme={theme} title={'Say hi'} onPress={this.presenter.sayHi} />
        </View>
      </AppContainer>
    )
  }
}

export default connect(() => ({}))(Home);
