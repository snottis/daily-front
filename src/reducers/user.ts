import { AnyAction } from 'redux';

interface UserData {
  access_token: string;
  username: string;
  locations: Array<any>;
  role: 'admin' | 'user';
}

export const setUser = (data: UserData): AnyAction => {
  window.localStorage.setItem('loginData', JSON.stringify(data));
  return { type: 'SET_USER', data };
};

const initialState = (): null | UserData => {
  const data = window.localStorage.getItem('loginData');
  if (data) return JSON.parse(data);
  return null;
};

const userReducer = (
  state = initialState(),
  action: AnyAction,
): UserData | null => {
  switch (action.type) {
    case 'SET_USER':
      return action.data;
    default:
      return state;
  }
};

export default userReducer;
