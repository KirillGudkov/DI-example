import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from "react-native";
import {Theme} from "../../MobX/Theme";
import {observer} from "mobx-react";

interface Props {
  navigation: {
    getParam: Function
  },
  theme: Theme
}

@observer
export class SettingsHeaderButton extends React.Component<Props> {
  render() {
    const onPress = this.props.navigation.getParam('onPress', () => null);
    const {accentColor} = this.props.theme;
    return (
      <TouchableOpacity onPress={onPress} style={style.rightButton}>
        <Image style={[style.reload, {tintColor: accentColor}]} source={{uri: 'ic_settings'}} />
      </TouchableOpacity>
    )
  }
}

const style = StyleSheet.create({
  reload: {
    width: 24,
    height: 24,
  },
  rightButton: {
    marginRight: 8,
    padding: 6
  },
});
