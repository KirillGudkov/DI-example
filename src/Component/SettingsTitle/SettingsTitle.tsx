import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Util} from "../../Util";
import {Theme} from "../../mobX/Theme";

interface Props {
  title: string,
  theme: Theme
}

export class SettingsTitle extends React.Component<Props, {}> {

  render() {
    const {title, theme} = this.props;
    const {backgroundColor, color} = theme;
    return (
      <View style={[style.container, {backgroundColor: Util.shadeColor(backgroundColor, -4)}]}>
        <Text style={[style.title, {color}]}>
          {title}
        </Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    padding: 12,
    justifyContent: 'center',
    width: '100%'
  },
  title: {
    opacity: 0.5,
    fontSize: 16,
  },
});
