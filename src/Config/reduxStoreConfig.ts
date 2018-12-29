import {applyMiddleware, compose, createStore,} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {reducer} from '../Reducer';
import {initialState} from './initialState';


const loggerMiddleware = createLogger({
  predicate: () =>__DEV__,
  collapsed: true,
  timestamp: false,
});

function configureStore(initialState: object) {
  const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware));
  return createStore(reducer, initialState, enhancer);
}

export const store = configureStore(initialState);
