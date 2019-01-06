import {HomeView} from "../View/HomeView";
import {log} from "../Action/Actions";
import {bind, Presenter} from "mvp-di";

export class HomePresenter extends Presenter<HomeView>{

  @bind
  sayHi() {
    this.view.showNotification();
  }
}
