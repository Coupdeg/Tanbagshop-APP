import { createStore } from 'redux'
//store
export const counter = (state = 1, action) => {
  switch (action.type) {
  case 'BROWSE':
    state = 1;
    return state;
  case 'DISCOUNT':
    state = 2;
    return state;
  case 'CART':
    state = 3;
    return state;
  case 'ACCOUNT':
    state = 4;
    return state;
  default:
    return state;
  }
}
//reducer
let Store = createStore(counter);

export default Store;