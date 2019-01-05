import {observable} from "mobx";
import {bind} from "mvp-di";

export class Theme {

  static sectionNames = {
    accentColor: 'Accent color',
    backgroundColor: 'Background color',
  };

  static themeNames = [
    'Light theme', 'Dark theme'
  ];

  static cacheKeys = {
    dark: 'dark',
    light: 'light',
    theme: 'theme'
  };

  theme!: Theme;

  protected accentColorList!: Array<any>;
  protected backgroundColorList!: Array<any>;

  @observable
  public backgroundColor: string = this.theme ? this.theme.backgroundColor : this.backgroundColorList[0].value;
  @observable
  public accentColor: string = this.theme ? this.theme.accentColor : this.accentColorList[0].value;

  public colors!: any;
  public color!: string;
  public borderColor!: string;

  public setAccentColor(color: string) {
    this.accentColor = color;
  }

  public setBackgroundColor(color: string) {
    this.backgroundColor = color;
  }

  @bind
  protected setTheme(value: string | null) {
    if (value) {
      const theme = JSON.parse(value);
      this.backgroundColor = theme.backgroundColor;
      this.accentColor = theme.accentColor;
    }
  }
}
