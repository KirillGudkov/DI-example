import {SettingsView} from "../View/SettingsView";
import {bind, Presenter} from "mvp-di";

export class SettingsPresenter extends Presenter<SettingsView> {

  @bind
  handleOnPress() {
    this.view.goBack();
  }
}
