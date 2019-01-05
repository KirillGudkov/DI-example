import React from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {Theme} from "../../mobX/Theme";
import {style} from "./style";

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
    const {color, borderColor} = theme;
    return (
      <TouchableHighlight
        underlayColor={borderColor}
        onPress={() => onSelect(section, item.value)}
        style={[style.container, {borderTopColor: borderColor, borderBottomColor: borderColor}]}>
        <View style={style.containerInner}>
          <Text style={[style.title, {color}]}>
            {item.name}
          </Text>
          {selected && <Image source={{uri: 'ic_done'}} style={[style.icon, {tintColor: color}]} />}
        </View>
      </TouchableHighlight>
    )
  }
}

