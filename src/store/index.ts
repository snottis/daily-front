import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import user from '../reducers/user';
import drawer from '../reducers/drawer';
import product from '../reducers/product';

const reducer = combineReducers({
  user,
  drawer,
  product,
});

const store = createStore(reducer, applyMiddleware(thunk));
export const { dispatch } = store;
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
