import * as types from './actionType';
import {Action} from "./Action";

export function log(value: string): Action {
  return {
    type: types.REDUX_ACTION,
    value,
  }
}
