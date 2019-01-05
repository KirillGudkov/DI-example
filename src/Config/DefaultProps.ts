import {Theme} from "../MobX/Theme";

export interface DefaultProps {
  dispatch: Function,
  screenProps: {
    themeStore: {
      theme: Theme,
      setAccentColor: Function,
      setBackgroundColor: Function,
      setDarkThemeOn: Function,
      setDarkThemeOff: Function
    }
  },
  navigation: {
    navigate: Function,
    goBack: Function,
    setParams: Function
  }
}
