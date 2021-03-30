import { Action } from '../types/action';

export const toggleDrawer = (): Action => {
  return { type: 'TOGGLE_DRAWER' };
};

export const closeDrawer = (): Action => {
  return { type: 'SET_DRAWER', data: false };
};
const drawerReducer = (state = false, action: Action): boolean => {
  switch (action.type) {
    case 'TOGGLE_DRAWER':
      return !state;
    case 'SET_DRAWER':
      return action.data;
    default:
      return state;
  }
};

export default drawerReducer;
