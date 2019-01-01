import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {style} from "./style";

interface Props {
  title: string,
  onPress: () => void,
  tintColor: string,
  filled?: boolean
}

export default class IOSButton extends React.PureComponent<Props> {
  render() {
    const {filled, tintColor, onPress, title} = this.props;
    if (filled) {
      return (
        <TouchableOpacity
          style={[style.container, {backgroundColor: tintColor, borderColor: tintColor}]}
          onPress={onPress}>
          <Text style={[style.title, {color: 'white'}]}>{title}</Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity
          style={[style.container, {borderColor: tintColor}]}
          onPress={onPress}>
          <Text style={[style.title, {color: tintColor}]}>{title}</Text>
        </TouchableOpacity>
      )
    }
  }
}
