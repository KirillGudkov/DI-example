export class Theme {
  theme!: Theme;

  protected colorList!: Array<any>;

  public colors!: any;
  public backgroundColor!: string;
  public accentColor!: string;
  public color!: string;
  public borderColor!: string;

  public getAccentColorName(color: string) {
    const result = this.colorList.find(item => item.value === color);
    if (result) {
      return result.name;
    }
  }

  public setAccentColor(color: string) {
    this.accentColor = color;
  }

  public setBackgroundColor(color: string) {
    this.backgroundColor = color;
  }
}
