import React, {ReactNode} from 'react';
import {Image, TouchableHighlight, View} from 'react-native';
import {Util} from "../../Util";
import {Theme} from "../../MobX/Theme";
import {DarkTheme} from "../../MobX/DarkTheme";
import {style} from "./style";
import {TextView} from "../../TextView";

interface Props {
  title: string,
  theme: Theme,
  onPress: () => void
}

export class SettingsButton extends React.Component<Props, {}> {
  render(): ReactNode {
    const {theme, title, onPress} = this.props;
    const {color, borderColor} = theme;
    const chevronColor = theme instanceof DarkTheme ? Util.shadeColor(borderColor, 20) : Util.shadeColor(borderColor, -20);
    const containerStyle = [style.container, {borderTopColor: borderColor, borderBottomColor: borderColor}];

    return (
      <TouchableHighlight underlayColor={borderColor} onPress={onPress} style={containerStyle}>
        <View style={style.containerInner}>
          <TextView style={[style.title, {color}]}>{title}</TextView>
          <Image source={{uri: 'ic_chevron_right'}} style={[style.icon, {tintColor: chevronColor}]} />
        </View>
      </TouchableHighlight>
    )
  }
}
