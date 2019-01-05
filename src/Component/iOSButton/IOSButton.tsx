import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {style} from "./style";
import {Theme} from "../../mobX/ThemeStore";

interface Props {
  title: string,
  onPress: () => void,
  theme: Theme,
  filled?: boolean
}

export default class IOSButton extends React.PureComponent<Props> {
  render() {
    const {filled, theme, onPress, title} = this.props;
    if (filled) {
      return (
        <TouchableOpacity
          style={[style.container, {backgroundColor: theme.tintColor, borderColor: theme.tintColor}]}
          onPress={onPress}>
          <Text style={[style.title, {color: 'white'}]}>{title}</Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity
          style={[style.container, {borderColor: theme.tintColor}]}
          onPress={onPress}>
          <Text style={[style.title, {color: theme.tintColor}]}>{title}</Text>
        </TouchableOpacity>
      )
    }
  }
}
