import { globalActionTypes as actions } from './global.actions';

// Define the reducer
export const globalReducer = (state, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case actions.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    case actions.LIGHT_THEME:
      return {
        ...state,
        theme: 'light',
      };
    case actions.DARK_THEME:
      return {
        ...state,
        theme: 'dark',
      };
    default:
      return state;
  }
};
