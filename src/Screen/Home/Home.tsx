import React from 'react';
import {HomePresenter} from "../../Presenter/HomePresenter";
import {SETTINGS} from "../../Navigation/routeName";
import {HomeView} from "../../View/HomeView";
import {connect} from "react-redux";
import {DefaultProps} from "../../Config/DefaultProps";
import {DefaultState} from "../../Config/DefaultState";
import {AppContainer} from "../../Component/AppContainer";
import {SettingsHeaderButton} from "../../Component/SettingsHeaderButton";
import {SettingsButton} from "../../Component/SettingsButton";
import {Notification, TapticFeedback} from "react-native-in-app-message";
import {Component} from '../../Config/DITypes';
import {bind, inject, viewProperty} from "mvp-di";

class Home extends React.Component<DefaultProps, DefaultState> implements HomeView {

  @inject
  private presenter!: HomePresenter;

  static navigationOptions = ({navigation, screenProps}: any) => {
    const {theme} = screenProps.themeStore;
    return {
      headerRight: <SettingsHeaderButton theme={theme} navigation={navigation} />
    }
  };

  componentDidMount() {
    this.props.navigation.setParams({'onPress': this.toSettings});
  }

  public getClassName() {
    return Component.HOME
  }

  @bind
  @viewProperty
  public toSettings(): void {
    TapticFeedback.impact();
    this.props.navigation.navigate(SETTINGS);
  }

  render() {
    const {theme} = this.props.screenProps.themeStore;
    return (
      <AppContainer theme={theme}>
        <SettingsButton title={'Show notification'} theme={theme} onPress={() => Notification.show()} />
        <SettingsButton title={'Open settings'} theme={theme} onPress={this.presenter.toSettings} />
      </AppContainer>
    )
  }
}

export default connect(() => ({}))(Home);
