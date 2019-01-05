import {Theme} from "../mobX/ThemeStore";

export interface DefaultProps {
  dispatch: Function,
  screenProps: {
    themeStore: {
      theme: Theme
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
