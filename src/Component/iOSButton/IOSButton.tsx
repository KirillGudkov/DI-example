import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {style} from "./style";
import {observer} from "mobx-react";
import {Theme} from "../../mobX/Theme";

interface Props {
  title: string,
  onPress: () => void,
  theme: Theme,
  filled?: boolean
}

@observer
export default class IOSButton extends React.Component<Props> {
  render() {
    const {filled, theme, onPress, title} = this.props;
    if (filled) {
      return (
        <TouchableOpacity
          style={[style.container, {backgroundColor: theme.accentColor, borderColor: theme.accentColor}]}
          onPress={onPress}>
          <Text style={[style.title, {color: 'white'}]}>{title}</Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity
          style={[style.container, {borderColor: theme.accentColor}]}
          onPress={onPress}>
          <Text style={[style.title, {color: theme.accentColor}]}>{title}</Text>
        </TouchableOpacity>
      )
    }
  }
}
