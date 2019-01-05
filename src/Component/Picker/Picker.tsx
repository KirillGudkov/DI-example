import React from 'react';
import {View} from 'react-native';
import {bind} from "mvp-di";
import {PickerItem} from "../PickerItem";
import {Theme} from "../../mobX/Theme";

interface State {
}

interface Props {
  section: string,
  onSelect: (section: string, color: string) => void,
  themeStore: {
    theme: Theme,
    setAccentColor: Function,
    setDarkThemeOn: Function,
    setDarkThemeOff: Function
  },
  data: Array<any>
}

interface Item {
  name: string,
  value: string
}

export class Picker extends React.Component<Props, State> {

  @bind
  renderItem(item: Item) {
    const {section} = this.props;
    const {theme} = this.props.themeStore;
    const selected = theme.accentColor === item.value;
    return (
      <PickerItem
        section={section}
        key={item.name}
        selected={selected}
        item={item}
        theme={theme}
        onSelect={this.props.onSelect} />
    );
  }

  @bind
  keyExtractor(item: Item): string {
    return item.name;
  }

  render() {
    return (
      <View style={{width: '100%'}}>
        {this.props.data.map(this.renderItem)}
      </View>
    )
  }
}
