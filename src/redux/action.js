import types from './types';

export function increment(data) {
  console.log('Increment function  Called ', data);
  return {
    type: types.INCREMENT,
    payLoad: data,
  };
}
export function decrement(data) {
  return {
    type: types.DECREMENT,
    payLoad: data,
  };
}
