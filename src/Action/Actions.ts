import * as types from './actionType';

export function log(value: string) {
  return {
    type: types.REDUX_ACTION,
    value,
  }
}
