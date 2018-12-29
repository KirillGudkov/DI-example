import {ProfileView} from "../View/ProfileView";
import {bind} from "dependency-injector";

export class ProfilePresenter {

  view: ProfileView;

  constructor(view: ProfileView) {
    this.view = view;
  }

  @bind
  handleOnPress() {
    this.view.goBack();
  }
}
