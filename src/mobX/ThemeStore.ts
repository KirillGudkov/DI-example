import {observable} from "mobx";
import {AsyncStorage} from "react-native";
import {bind} from "mvp-di";
import {DarkTheme} from "./DarkTheme";
import {LightTheme} from "./LightTheme";
import {Theme} from "./Theme";

export class ThemeStore {

  private lightTheme = new LightTheme();
  private darkTheme = new DarkTheme();

  @observable
  public theme: Theme = this.lightTheme;

  constructor() {
    AsyncStorage.getItem(Theme.cacheKeys.theme).then(this.toggleTheme);
  }

  @bind
  toggleTheme(theme: string | null = Theme.cacheKeys.light) {
    theme === Theme.cacheKeys.dark ? this.setDarkThemeOn() : this.setDarkThemeOff();
  }

  @bind
  setAccentColor(color: string) {
    this.theme.setAccentColor(color);
  }

  @bind
  setBackgroundColor(color: string) {
    this.theme.setBackgroundColor(color);
  }

  @bind
  public setDarkThemeOn() {
    this.theme = this.darkTheme;
    AsyncStorage.setItem(Theme.cacheKeys.theme, Theme.cacheKeys.dark);
  }

  @bind
  public setDarkThemeOff() {
    this.theme = this.lightTheme;
    AsyncStorage.setItem(Theme.cacheKeys.theme, Theme.cacheKeys.light);
  }
}

export const themeStore = new ThemeStore();
