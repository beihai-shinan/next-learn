import ACTIONS from './actions';
import { IState } from '@/types/store';

export const initialState:Partial<IState> = {
  userInfo: {},
  simpleInfo: {}
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case ACTIONS.UPDATE_NAME: {
      const newState = {...state};
      const info = action.payload;
      newState.userInfo = info
      return newState;
    }
    case ACTIONS.ADD: {
      const newState = {...state};
      const info = action.payload;
      newState.simpleInfo = info
      return newState;
    } 
    default: {
      return state;
    }
  }
}

export default reducer;