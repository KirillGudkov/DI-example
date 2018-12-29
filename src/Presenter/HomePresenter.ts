import {HomeView} from "../View/HomeView";
import {bind} from "dependency-injector";

export class HomePresenter {
  view: HomeView;

  constructor(view: HomeView) {
    this.view = view;
  }

  @bind
  handleOnPress() {
    this.view.toProfile()
  }
}
