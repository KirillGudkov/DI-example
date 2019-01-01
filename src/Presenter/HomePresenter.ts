import {HomeView} from "../View/HomeView";
import {log} from "../Action/Actions";
import {bind, Presenter} from "mvp-di";

export class HomePresenter extends Presenter<HomeView>{

  @bind
  handleOnPress() {
    this.view.toProfile()
  }

  @bind
  sayHi() {
    this.view.dispatch(log("Hi from Presenter!"));
  }
}
