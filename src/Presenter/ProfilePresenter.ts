import {ProfileView} from "../View/ProfileView";
import {Presenter, bind} from "presenter-injection";

export class ProfilePresenter extends Presenter<ProfileView> {

  @bind
  handleOnPress() {
    this.view.goBack();
  }
}
