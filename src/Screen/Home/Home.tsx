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
import {SettingsHeaderButton} from "../../Component/SettingsHeaderButton";

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
  public showNotification(): void {
    this.props.screenProps.showNotification();
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
        <View style={style.buttonContainer}>
          <IOSButton filled theme={theme} title={'Show me Tony'} onPress={this.presenter.sayHi} />
        </View>
      </AppContainer>
    )
  }
}

export default connect(() => ({}))(Home);
