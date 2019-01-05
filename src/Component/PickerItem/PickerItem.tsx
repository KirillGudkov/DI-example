import React from 'react';
import {Image, TouchableHighlight, View} from 'react-native';
import {Theme} from "../../MobX/Theme";
import {style} from "./style";
import {TextView} from "../../TextView";
import {Util} from "../../Util";

interface Props {
  item: {
    name: string,
    value: string,
  }
  section: string,
  theme: Theme,
  onSelect: (section: string, color: string) => void,
  selected: boolean
}

export class PickerItem extends React.Component<Props, {}> {

  render() {
    const {theme, item, section, onSelect, selected} = this.props;
    const {color, borderColor, backgroundColor} = theme;
    return (
      <TouchableHighlight
        underlayColor={Util.shadeColor(backgroundColor, -10)}
        onPress={() => onSelect(section, item.value)}
        style={[style.container, {borderTopColor: borderColor, borderBottomColor: borderColor}]}>
        <View style={style.containerInner}>
          <TextView style={[style.title, {color}]}>
            {item.name}
          </TextView>
          {selected && <Image source={{uri: 'ic_done'}} style={[style.icon, {tintColor: color}]} />}
        </View>
      </TouchableHighlight>
    )
  }
}

