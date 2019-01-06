import {Theme} from "../MobX/Theme";

export interface DefaultProps {
  dispatch: Function,
  screenProps: {
    showNotification: Function,
    showCustom: Function,
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
