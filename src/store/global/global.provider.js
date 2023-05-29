import { useReducer } from 'react';

import { GlobalState } from './global.state';
import { globalReducer } from './global.reducer';
import { globalActionTypes as actions } from './global.actions';

// Define the initial state
const GLOBAL_STATE = {
  isLoggedIn: undefined,
  theme: 'light',
};

export const GlobalStateProvider = ({ children }) => {
  // Create the reducer
  const [state, dispatch] = useReducer(globalReducer, GLOBAL_STATE);

  const value = {
    ...state,
    login: () => {
      dispatch({ type: actions.LOGIN });
    },
    logout: () => {
      dispatch({ type: actions.LOGOUT });
    },
    setLightTheme: () => {
      dispatch({ type: actions.LIGHT_THEME });
    },
    setDarkTheme: () => {
      dispatch({ type: actions.DARK_THEME });
    },
  };

  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>;
};
