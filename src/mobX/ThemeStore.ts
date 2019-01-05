import {observable} from "mobx";
import {AsyncStorage} from "react-native";
import {Theme} from "./Theme";
import {bind} from "mvp-di";

export class ThemeStore {

  constructor() {
    AsyncStorage.getItem('_theme').then((theme = 'light') => {
      theme === 'dark' ? this.setDarkThemeOn() : this.setDarkThemeOff();
    });
  }

  @observable
  private _theme: any = observable.box(new LightTheme());

  private darkTheme = observable.box(new DarkTheme());
  private lightTheme = observable.box(new LightTheme());

  public setDarkThemeOn() {
    this._theme = this.darkTheme;
    AsyncStorage.setItem('_theme', 'dark');
  }

  public setDarkThemeOff() {
    this._theme = this.lightTheme;
    AsyncStorage.setItem('_theme', 'light');
  }


  get theme(): any {
    return this._theme.value;
  }

  @bind
  setAccentColor(color: string) {
    this._theme.value.setAccentColor(color);
  }

  @bind
  setBackgroundColor(color: string) {
    this._theme.value.setBackgroundColor(color);
  }
}

export class DarkTheme extends Theme {

  constructor() {
    super();
    AsyncStorage.getItem('dark').then(value => {
      if (value) {
        const theme = JSON.parse(value);
        this.backgroundColor = theme.backgroundColor;
        this.accentColor = theme.accentColor;
      }
    });
  }

  protected accentColorList = [
    {name: 'Red', value: '#ff343f'},
    {name: 'Coral', value: '#28b2a6'},
    {name: 'Purple', value: '#bb4aef'}
  ];

  protected backgroundColorList = [
    {name: 'Dark Grey', value: '#2b2b2b'},
    {name: 'Black', value: '#000000'},
    {name: 'Dark Blue', value: '#011729'}
  ];

  public colors = {
    'Accent color': this.accentColorList,
    'Background color': this.backgroundColorList,
  };

  @observable
  public backgroundColor: string = '#2b2b2b';
  @observable
  public accentColor: string = this.colors['Accent color']![0].value || '#ff343f';
  @observable
  public color: string = '#e7e7e7';
  @observable
  public borderColor: string = '#393939';

  public setBackgroundColor(color: string) {
    super.setBackgroundColor(color);
    AsyncStorage.setItem('dark', JSON.stringify({
      accentColor: this.accentColor,
      backgroundColor: this.backgroundColor
    }))
  }

  public setAccentColor(color: string) {
    super.setAccentColor(color);
    AsyncStorage.setItem('dark', JSON.stringify({
      accentColor: this.accentColor,
      backgroundColor: this.backgroundColor
    }))
  }
}

export class LightTheme extends Theme {

  theme!: Theme;

  constructor() {
    super();
    AsyncStorage.getItem('light').then(value => {
      if (value) {
        this.theme = JSON.parse(value);
        this.backgroundColor = this.theme.backgroundColor;
        this.accentColor = this.theme.accentColor;
      }
    });
  }

  protected colorList = [
    {name: 'Blue', value: '#007aff'},
    {name: 'Light Blue', value: '#08b7ff'},
    {name: 'Pink', value: '#ff63d0'}
  ];

  public colors = {
    'Accent color': this.colorList
  };

  @observable
  public backgroundColor: string = this.theme ? this.theme.backgroundColor : '#ffffff';
  @observable
  public accentColor: string = this.theme ? this.theme.accentColor : this.colors['Accent color']![0].value || '#007aff';
  @observable
  public color: string = '#333333';
  @observable
  public borderColor: string = '#f5f5f5';

  public setBackgroundColor(color: string) {
    super.setBackgroundColor(color);
    AsyncStorage.setItem('light', JSON.stringify({
      accentColor: this.accentColor,
      backgroundColor: this.backgroundColor
    }))
  }

  public setAccentColor(color: string) {
    super.setAccentColor(color);
    AsyncStorage.setItem('light', JSON.stringify({
      accentColor: this.accentColor,
      backgroundColor: this.backgroundColor
    }))
  }
}

export const themeStore = new ThemeStore();
