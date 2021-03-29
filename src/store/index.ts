import { createStore, combineReducers } from 'redux';
import user from '../reducers/user';

const reducer = combineReducers({
  user,
});

const store = createStore(reducer);
export const { dispatch } = store;
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
