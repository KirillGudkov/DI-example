import {observable} from "mobx";

export class ThemeStore {

  @observable
  theme = new LightTheme();

  setDarkThemeOn() {
    this.theme = new DarkTheme();
  }

  setDarkThemeOff() {
    this.theme = new LightTheme();
  }

}

export class DarkTheme implements Theme {
  backgroundColor: string = '#2b2b2b';
  tintColor: string = '#007aff';
  color: string = '#e7e7e7';
  borderColor: string = '#444444';
}

export class LightTheme implements Theme {
  backgroundColor: string = '#ffffff';
  tintColor: string = '#007aff';
  color: string = '#333333';
  borderColor: string = '#f5f5f5';
}

export interface Theme {
  backgroundColor: string;
  tintColor: string;
  color: string;
  borderColor: string;
}

export const themeStore = new ThemeStore();
