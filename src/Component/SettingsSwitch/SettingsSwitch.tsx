import React, {ReactNode} from 'react';
import {Text, View} from "react-native";
import {Switch} from "react-native";
import {Theme} from "../../mobX/Theme";
import {DarkTheme} from "../../mobX/DarkTheme";
import {style} from "./style";

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
        <Text style={[style.title, {color}]}>{title}</Text>
        <Switch trackColor={trackColor} value={value} onValueChange={onValueChange} />
      </View>
    )
  }
}
