import { Action } from '../types/action';

export const toggleDrawer = (): Action => {
  return { type: 'TOGGLE_DRAWER' };
};

const drawerReducer = (state = false, action: Action): boolean => {
  switch (action.type) {
    case 'TOGGLE_DRAWER':
      return !state;
    default:
      return state;
  }
};

export default drawerReducer;
