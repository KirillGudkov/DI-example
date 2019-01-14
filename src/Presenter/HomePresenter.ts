import {HomeView} from "../View/HomeView";
import {bind, Presenter} from "mvp-di";
import {Notification} from "react-native-in-app-message";

export class HomePresenter extends Presenter<HomeView>{

  @bind
  showMessage() {
    Notification.show();
  }

  @bind
  toSettings() {
    this.view.toSettings();
  }
}
