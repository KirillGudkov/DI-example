import {Theme} from "./Theme";
import { iOSColors } from 'react-native-typography'
import {AsyncStorage} from "react-native";

export class LightTheme extends Theme {

  constructor() {
    super();
    AsyncStorage.getItem(Theme.cacheKeys.light).then(this.setTheme);
  }

  public color: string = '#333333';
  public borderColor: string = '#f5f5f5';

  protected accentColorList = [
    {name: 'Red', value: iOSColors.red},
    {name: 'Blue', value: iOSColors.blue},
    {name: 'Teal Blue', value: iOSColors.tealBlue},
    {name: 'Green', value: iOSColors.green},
    {name: 'Orange', value: iOSColors.orange},
    {name: 'Pink', value: iOSColors.pink}
  ];

  protected backgroundColorList = [
    {name: 'White', value: '#ffffff'},
  ];

  public colors = {
    [LightTheme.sectionNames.accentColor]: this.accentColorList,
    [LightTheme.sectionNames.backgroundColor]: this.backgroundColorList,
  };

  public setBackgroundColor(color: string) {
    super.setBackgroundColor(color);
    AsyncStorage.setItem(Theme.cacheKeys.light, JSON.stringify({
      accentColor: this.accentColor,
      backgroundColor: this.backgroundColor
    }))
  }

  public setAccentColor(color: string) {
    super.setAccentColor(color);
    AsyncStorage.setItem(Theme.cacheKeys.light, JSON.stringify({
      accentColor: this.accentColor,
      backgroundColor: this.backgroundColor
    }))
  }
}
