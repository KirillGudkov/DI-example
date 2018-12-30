import {bind, Presenter} from "dependency-injector";
import {ProfileView} from "../View/ProfileView";

export class ProfilePresenter extends Presenter<ProfileView> {

  @bind
  handleOnPress() {
    this.view.goBack();
  }
}
