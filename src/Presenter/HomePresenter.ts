import {HomeView} from "../View/HomeView";
import {bind, Presenter} from "presenter-injection";

export class HomePresenter extends Presenter<HomeView>{

  @bind
  handleOnPress() {
    this.view.toProfile()
  }
}
