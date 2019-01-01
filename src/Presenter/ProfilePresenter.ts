import {ProfileView} from "../View/ProfileView";
import {bind, Presenter} from "mvp-di";

export class ProfilePresenter extends Presenter<ProfileView> {

  @bind
  handleOnPress() {
    this.view.goBack();
  }
}
