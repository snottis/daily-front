import { createStore, combineReducers } from 'redux';
import user from '../reducers/user';
import drawer from '../reducers/drawer';

const reducer = combineReducers({
  user,
  drawer,
});

const store = createStore(reducer);
export const { dispatch } = store;
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
