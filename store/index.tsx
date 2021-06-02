import React, { createContext, useContext, useReducer } from 'react';
import reducer, { initialState } from './reducer';
import { IState } from '@/types/store';

const MyContext = createContext<any>({});

const Provider = ({children}) => {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <MyContext.Provider value={{store, dispatch}}>
      {children}
    </MyContext.Provider>
  )
}
export default Provider;

export const useMyData = () => {
  const { store, dispatch } = useContext(MyContext);
  return {
    store,
    dispatch
  }
}