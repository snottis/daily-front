import { Action } from '../types/action';

const initialState = null;

const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.data;
    default:
      return state;
  }
};

export default userReducer;
