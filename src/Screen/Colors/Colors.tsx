import React from 'react';
import {SegmentedControlIOS, StyleSheet, View} from 'react-native';
import {observer} from "mobx-react";
import {AppContainer} from "../../Component/AppContainer";
import {DefaultProps} from "../../Config/DefaultProps";
import {DefaultState} from "../../Config/DefaultState";
import {bind} from "mvp-di";
import {Picker} from "../../Component/Picker";
import {SettingsTitle} from "../../Component/SettingsTitle";
import {Util} from "../../Util";
import {DarkTheme} from "../../mobX/ThemeStore";

@observer
export class Colors extends React.Component<DefaultProps, DefaultState> {

  @bind
  handleOnValueChange(value: string) {
    if (value === 'Light theme') {
      this.props.screenProps.themeStore.setDarkThemeOff();
    } else {
      this.props.screenProps.themeStore.setDarkThemeOn();
    }
  }

  @bind
  onSelect(section: string, color: string) {
    const {setAccentColor, setBackgroundColor} = this.props.screenProps.themeStore;
    switch (section) {
      case 'Accent color':
        setAccentColor(color);
        break;
      case 'Background color':
        setBackgroundColor(color);
        break;
    }
  }

  @bind
  renderSection(section: string) {
    const {theme} = this.props.screenProps.themeStore;
    return (
      <View key={section} style={style.section}>
        <SettingsTitle title={section.toUpperCase()} theme={theme} />
        <Picker section={section} onSelect={this.onSelect} data={theme.colors[section]}
                themeStore={this.props.screenProps.themeStore} />
      </View>
    )
  }

  render() {
    const {theme} = this.props.screenProps.themeStore;
    const {accentColor, backgroundColor} = theme;
    return (
      <AppContainer theme={theme}>
        <View style={[style.container, {backgroundColor: Util.shadeColor(backgroundColor, -4),}]}>
          <SegmentedControlIOS
            selectedIndex={theme instanceof DarkTheme ? 1 : 0}
            tintColor={accentColor}
            onValueChange={this.handleOnValueChange}
            style={style.sc}
            values={['Light theme', 'Dark theme']} />
        </View>
        {Object.keys(theme.colors).map(this.renderSection)}
      </AppContainer>
    )
  }
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 12,
    alignItems: 'center',
  },
  sc: {
    width: '94%'
  },
  section: {
    width: '100%'
  },
});
