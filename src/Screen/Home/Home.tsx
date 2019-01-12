import React from 'react';
import {HomePresenter} from "../../Presenter/HomePresenter";
import {SETTINGS} from "../../Navigation/routeName";
import {HomeView} from "../../View/HomeView";
import {connect} from "react-redux";
import {bind, inject, viewProperty} from "mvp-di";
import {DefaultProps} from "../../Config/DefaultProps";
import {DefaultState} from "../../Config/DefaultState";
import {observer} from "mobx-react";
import {AppContainer} from "../../Component/AppContainer";
import {SettingsHeaderButton} from "../../Component/SettingsHeaderButton";
import {SettingsButton} from "../../Component/SettingsButton";
import {Util} from "../../Util";

@observer
class Home extends React.Component<DefaultProps, DefaultState> implements HomeView {

  static navigationOptions = ({navigation, screenProps}: any) => {
    const {theme} = screenProps.themeStore;
    return {
      headerRight: <SettingsHeaderButton theme={theme} navigation={navigation} />
    }
  };

  @inject
  presenter!: HomePresenter;

  componentDidMount() {
    this.props.navigation.setParams({'onPress': this.toSettings});
  }

  @bind
  @viewProperty
  public toSettings(): void {
    this.props.navigation.navigate(SETTINGS);
  }

  render() {
    const {theme} = this.props.screenProps.themeStore;
    return (
      <AppContainer theme={theme}>
        <SettingsButton title={'Show notification'} theme={theme} onPress={this.presenter.sayHi} />
        <SettingsButton title={'Open settings'} theme={theme} onPress={this.toSettings} />
      </AppContainer>
    )
  }
}

export default connect(() => ({}))(Home);
