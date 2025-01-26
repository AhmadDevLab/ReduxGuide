import types from './types';

let init_State = {
  num: 0,
};

export function counterReducer(state = init_State, action) {
  switch (action.type) {
    case types.INCREMENT:
      let data = action.payLoad;
      console.log('Increment Reducer  Called ', data);
      return {...state, num: data + 1};

    case types.DECREMENT: {
      let data = action.payload;
      return {...state, num: data + 1};
    }
    default:
      return {...state};
  }
}
