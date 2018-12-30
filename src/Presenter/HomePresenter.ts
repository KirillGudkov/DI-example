import {HomeView} from "../View/HomeView";
import {bind, Presenter} from "dependency-injector";

export class HomePresenter extends Presenter<HomeView>{

  @bind
  handleOnPress() {
    this.view.toProfile()
  }
}
