import React from 'react';
import {View} from 'react-native';
import {Util} from "../../Util";
import {Theme} from "../../MobX/Theme";
import {style} from "./style";
import {TextView} from "../../TextView";

interface Props {
  title: string,
  theme: Theme
}

export class SettingsTitle extends React.Component<Props, {}> {

  render() {
    const {title, theme} = this.props;
    const {backgroundColor, borderColor, color} = theme;
    return (
      <View style={[style.container, {borderBottomColor: borderColor, backgroundColor: Util.shadeColor(backgroundColor, -4)}]}>
        <TextView style={[style.title, {color}]}>
          {title.toUpperCase()}
        </TextView>
      </View>
    )
  }
}
