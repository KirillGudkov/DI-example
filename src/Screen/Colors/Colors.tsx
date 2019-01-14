import React, {ReactNode} from 'react';
import {SegmentedControlIOS, View} from 'react-native';
import {observer} from "mobx-react";
import {AppContainer} from "../../Component/AppContainer";
import {DefaultProps} from "../../Config/DefaultProps";
import {DefaultState} from "../../Config/DefaultState";
import {bind} from "mvp-di";
import {Picker} from "../../Component/Picker";
import {SettingsTitle} from "../../Component/SettingsTitle";
import {Util} from "../../Util";
import {DarkTheme} from "../../MobX/DarkTheme";
import {style} from "./style";
import {Theme} from "../../MobX/Theme";

@observer
export class Colors extends React.Component<DefaultProps, DefaultState> {

  @bind
  handleOnValueChange(value: string): void {
    const {setDarkThemeOff, setDarkThemeOn} = this.props.screenProps.themeStore;
    value === Theme.themeNames[0] ? setDarkThemeOff() : setDarkThemeOn();
  }

  @bind
  onSelect(section: string, color: string): void {
    const {setAccentColor, setBackgroundColor} = this.props.screenProps.themeStore;
    switch (section) {
      case Theme.sectionNames.accentColor:
        setAccentColor(color);
        break;
      case Theme.sectionNames.backgroundColor:
        setBackgroundColor(color);
        break;
    }
  }

  @bind
  renderSection(section: string): ReactNode {
    const {themeStore} = this.props.screenProps;
    const {theme} = themeStore;
    const selected = (theme as any)[Util.getKeyByValue(Theme.sectionNames, section)];
    return (
      <View key={section} style={style.section}>
        <SettingsTitle title={section.toUpperCase()} theme={theme} />
        <Picker selected={selected} section={section} onSelect={this.onSelect} data={theme.colors[section]}
                themeStore={themeStore} />
      </View>
    )
  }

  render(): ReactNode {
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
            values={Theme.themeNames} />
        </View>
        {Object.keys(theme.colors).map(this.renderSection)}
      </AppContainer>
    )
  }
}
