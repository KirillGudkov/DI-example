import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Switch} from "react-native";
import {DarkTheme} from "../../mobX/ThemeStore";
import {Theme} from "../../mobX/Theme";

interface Props {
  title: string,
  theme: Theme,
  onValueChange: (value: boolean) => void
}

export class SettingsSwitch extends React.Component<Props, {}> {

  render() {
    const {theme, title, onValueChange} = this.props;
    const {color, borderColor, accentColor} = theme;
    return (
      <View style={[style.container, {borderTopColor: borderColor, borderBottomColor: borderColor}]}>
        <Text style={[style.title, {color}]}>
          {title}
        </Text>
        <Switch
          trackColor={{false: '#eee', true: accentColor}}
          value={theme instanceof DarkTheme}
          onValueChange={onValueChange} />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    padding: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#f5f5f5',
    borderBottomColor: '#f5f5f5',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 16,
    fontWeight: '600'
  }
});
