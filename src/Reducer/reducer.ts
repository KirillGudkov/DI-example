import * as types from '../Action/actionType';
import {Action} from "../Action/Action";

export default function simpleReducer(state: {}, action: Action): any {
  const newState = {...state};

  switch (action.type) {
    case types.REDUX_ACTION:
      return newState;
    default:
      return newState;
  }
}
