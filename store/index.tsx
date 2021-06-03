import React, { createContext, useContext, useReducer } from 'react';
import reducer, { initialState } from './reducer';
import ACTIONS from './actions';
import { IState, MyDataType, IProvider } from '@/types/store';

export const MyContext = createContext<any>({name: "1"});

const Provider = ({children, data}:IProvider) => {
  let [store, dispatch] = useReducer(reducer, data || initialState);

  const update = (userInfo) => {
    dispatch({
      type: ACTIONS.UPDATE_NAME,
      payload: userInfo
    })
  }

  const addItems = (cardInfo) => {
    dispatch({
      type: ACTIONS.ADD,
      payload: {
        ...store.simpleInfo,
        items: [...store.simpleInfo?.items!, cardInfo]
      }
    })
  }

  return (
    <MyContext.Provider value={{store, dispatch, update, addItems}}>
      {children}
    </MyContext.Provider>
  )
}
export default Provider;

export const useMyData = ():MyDataType => {
  return useContext(MyContext);
}