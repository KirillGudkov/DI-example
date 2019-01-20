import {HomePresenter} from "../Presenter/HomePresenter";
import {SettingsPresenter} from "../Presenter/SettingsPresenter";
import {PresenterMap} from "mvp-di";

export enum Component {
  HOME = 'Home',
  SETTINGS = 'Settings'
}

export default new PresenterMap<Component>()
  .set(Component.HOME, HomePresenter)
  .set(Component.SETTINGS, SettingsPresenter);
