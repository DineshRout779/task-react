/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from 'react';
import reducers from './reducers';

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
};

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, INITIAL_STATE);

  useEffect(() => {
    if (state.user) {
      localStorage.setItem('user', JSON.stringify(state.user));
    }
  }, [state.user]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
