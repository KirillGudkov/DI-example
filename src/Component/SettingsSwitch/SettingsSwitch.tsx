import React, {ReactNode} from 'react';
import {View} from "react-native";
import {Switch} from "react-native";
import {Theme} from "../../MobX/Theme";
import {DarkTheme} from "../../MobX/DarkTheme";
import {style} from "./style";
import {TextView} from "../../TextView";

interface Props {
  title: string,
  theme: Theme,
  onValueChange: (value: boolean) => void
}

export class SettingsSwitch extends React.Component<Props, {}> {
  render(): ReactNode {
    const {theme, title, onValueChange} = this.props;
    const {color, borderColor, accentColor} = theme;
    const trackColor = {false: '#eee', true: accentColor};
    const value = theme instanceof DarkTheme;

    return (
      <View style={[style.container, {borderTopColor: borderColor, borderBottomColor: borderColor}]}>
        <TextView style={[style.title, {color}]}>{title}</TextView>
        <Switch trackColor={trackColor} value={value} onValueChange={onValueChange} />
      </View>
    )
  }
}
