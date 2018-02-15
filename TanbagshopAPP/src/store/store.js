import { createStore } from 'redux'

export const counter = (state = 0, action) => {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  case 'RESET':
    return 0;
  case 'BROWSE':
    state = 11;
    return state;
  case 'DISCOUNT':
    state = 12;
    return state;
  case 'DISCOUNT':
    state = 13;
    return state;
  case 'ACCOUNT':
    state = 14;
    return state;
  default:
    return state;
  }
}

let store = createStore(counter);

export default store;