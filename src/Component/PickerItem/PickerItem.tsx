import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Theme} from "../../mobX/Theme";

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
