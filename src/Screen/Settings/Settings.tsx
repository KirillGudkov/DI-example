import React from 'react';
import {View} from 'react-native';
import {SettingsPresenter} from "../../Presenter/SettingsPresenter";
import {SettingsView} from "../../View/SettingsView";
import {style} from './style';
import IOSButton from "../../Component/iOSButton/IOSButton";
import {bind, inject, viewProperty} from "mvp-di";
import {DefaultProps} from "../../Config/DefaultProps";
import {DefaultState} from "../../Config/DefaultState";
import {observer} from 'mobx-react';
import {SettingsTitle} from "../../Component/SettingsTitle";
import {SettingsSwitch} from "../../Component/SettingsSwitch";
import {AppContainer} from "../../Component/AppContainer";
import {SettingsButton} from "../../Component/SettingsButton";
import {COLORS} from "../../Navigation/routeName";

@observer
export default class Settings extends React.Component<DefaultProps, DefaultState> implements SettingsView {

  @inject
  presenter!: SettingsPresenter;

  @bind
  toggleDarkTheme(value: boolean): void {
    if (value) {
      this.props.screenProps.themeStore.setDarkThemeOn();
    } else {
      this.props.screenProps.themeStore.setDarkThemeOff();
    }
  }

  @bind
  next(): void {
    this.props.navigation.navigate(COLORS);
  }

  render() {
    const {theme} = this.props.screenProps.themeStore;
    return (
      <AppContainer theme={theme}>
        <SettingsTitle title={'APPEARANCE'} theme={theme} />
        <View style={style.settingsItemWrapper}>
          <SettingsSwitch title={'Dark theme'} theme={theme} onValueChange={this.toggleDarkTheme} />
          <SettingsButton title={'Colors'} theme={theme} onPress={this.next} />
        </View>
        <View style={{height: 16}} />
      </AppContainer>
    )
  }
}
