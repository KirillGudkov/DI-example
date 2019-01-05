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
    {name: 'Coral', value: '#28b2a6'},
    {name: 'Purple', value: '#bb4aef'}
  ];

  protected backgroundColorList = [
    {name: 'Dark Grey', value: '#2b2b2b'},
    {name: 'Black', value: '#151515'},
    {name: 'Dark Blue', value: '#011729'}
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
