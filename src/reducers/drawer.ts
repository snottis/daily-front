import { AnyAction } from 'redux';

export const toggleDrawer = (): AnyAction => {
  return { type: 'TOGGLE_DRAWER' };
};

export const closeDrawer = (): AnyAction => {
  return { type: 'SET_DRAWER', data: false };
};
const drawerReducer = (state = false, action: AnyAction): boolean => {
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
