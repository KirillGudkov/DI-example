import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from "react-native";

interface Props {
  navigation: {
    getParam: Function
  }
}

export class ReloadButton extends React.PureComponent<Props> {
  render() {
    const onPress = this.props.navigation.getParam('reset', () => null);
    return (
      <TouchableOpacity onPress={onPress} style={style.rightButton}>
        <Image style={style.reload} source={{uri: 'ic_reload'}} />
      </TouchableOpacity>
    )
  }
}

const style = StyleSheet.create({
  reload: {
    width: 20,
    height: 20,
  },
  rightButton: {
    marginRight: 8,
    padding: 6
  },
});
