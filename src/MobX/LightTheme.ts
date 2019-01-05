import {Theme} from "./Theme";
import {AsyncStorage} from "react-native";

export class LightTheme extends Theme {

  constructor() {
    super();
    AsyncStorage.getItem(Theme.cacheKeys.light).then(this.setTheme);
  }

  public color: string = '#333333';
  public borderColor: string = '#f5f5f5';

  protected accentColorList = [
    {name: 'Blue', value: '#007aff'},
    {name: 'Light Blue', value: '#08b7ff'},
    {name: 'Pink', value: '#ff63d0'}
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
