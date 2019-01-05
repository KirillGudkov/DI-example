import {Theme} from "./Theme";
import {AsyncStorage} from "react-native";

export class DarkTheme extends Theme {

  constructor() {
    super();
    AsyncStorage.getItem(Theme.cacheKeys.dark).then(this.setTheme);
  }

  public color: string = '#e7e7e7';
  public borderColor: string = '#393939';

  protected accentColorList = [
    {name: 'Red', value: '#ff343f'},
    {name: 'Coral', value: '#2ab9ad'},
    {name: 'Purple', value: '#ac42ef'}
  ];

  protected backgroundColorList = [
    {name: 'Dark Grey', value: '#2b2b2b'},
    {name: 'Black', value: '#0d0d0d'},
    {name: 'Dark Blue', value: '#021621'}
  ];

  public colors = {
    [DarkTheme.sectionNames.accentColor]: this.accentColorList,
    [DarkTheme.sectionNames.backgroundColor]: this.backgroundColorList,
  };

  public setBackgroundColor(color: string) {
    super.setBackgroundColor(color);
    AsyncStorage.setItem(Theme.cacheKeys.dark, JSON.stringify({
      accentColor: this.accentColor,
      backgroundColor: this.backgroundColor
    }))
  }

  public setAccentColor(color: string) {
    super.setAccentColor(color);
    AsyncStorage.setItem(Theme.cacheKeys.dark, JSON.stringify({
      accentColor: this.accentColor,
      backgroundColor: this.backgroundColor
    }))
  }
}
