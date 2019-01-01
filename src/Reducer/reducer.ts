import * as types from '../Action/actionType';
import {Action} from "../Action/Action";
import {Alert} from "react-native";

export default function simpleReducer(state: {}, action: Action): any {
  const newState = {...state};

  switch (action.type) {
    case types.ALERT:
      Alert.alert('Message', action.value);
      return newState;
    default:
      return newState;
  }
}
