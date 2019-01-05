import React from 'react';
import {TouchableOpacity} from 'react-native';
import {style} from "./style";
import {observer} from "mobx-react";
import {Theme} from "../../MobX/Theme";
import {TextView} from "../../TextView";

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
          <TextView style={[style.title, {color: 'white'}]}>{title}</TextView>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity
          style={[style.container, {borderColor: theme.accentColor}]}
          onPress={onPress}>
          <TextView style={[style.title, {color: theme.accentColor}]}>{title}</TextView>
        </TouchableOpacity>
      )
    }
  }
}
