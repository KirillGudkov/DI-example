import React from 'react';
import {StyleSheet, Text, Image, TouchableHighlight, View} from 'react-native';
import {DarkTheme, Theme} from "../../mobX/ThemeStore";
import {Util} from "../../Util";

interface Props {
  title: string,
  theme: Theme,
  onPress: () => void
}

export class SettingsButton extends React.Component<Props, {}> {

  render() {
    const {theme, title, onPress} = this.props;
    const {color, borderColor} = theme;
    const chevronColor = theme instanceof DarkTheme ? Util.shadeColor(borderColor, 20) : Util.shadeColor(borderColor, -20);
    return (
      <TouchableHighlight
        underlayColor={borderColor}
        onPress={onPress}
        style={[style.container, {borderTopColor: borderColor, borderBottomColor: borderColor}]}>
        <View style={style.containerInner}>
          <Text style={[style.title, {color}]}>
            {title}
          </Text>
          <Image
            source={{uri: 'ic_chevron_right'}}
            style={[style.icon, {tintColor: chevronColor}]} />
        </View>
      </TouchableHighlight>
    )
  }
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#f5f5f5',
    borderBottomColor: '#f5f5f5',
  },
  containerInner: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 16,
    fontWeight: '600'
  },
  icon: {
    width: 14,
    height: 14,
  }
});
