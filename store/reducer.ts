import ACTIONS from './actions';
import { IState } from '@/types/store';

export const initialState:Partial<IState> = {
  userInfo: {
    name: 'zhang san',
    age: 18,
    address: 'wo ge guang change',
    group: 'group 1'
  },
  simpleInfo: {
    zipcode: 95008,
    is_shipping_order: true,
    city: 'city1'
  }
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case ACTIONS.ADD: {
      return {
        ...state,
        ...action.payload
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;