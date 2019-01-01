import {HomeView} from "../View/HomeView";
import {bind, Presenter} from "presenter-injection";
import {log} from "../Action/Actions";

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
