'use strict';

let initState = [];

export default (state=initState, action) => {
  let {type, payload} = action;

  switch(type) {
    case 'CATEGORY_CREATE':
      return [...state, payload];
    case 'CATEGORY_UPDATE':
      return state.map(cat => {
        return cat.id === payload.id ? payload : cat;
      })
    case 'CATEGORY_DELETE':
      return state.filter(cat => cat.id !== payload.id);
    case 'CATEGORY_RESET':
      return initState;
    default:
      return state;
  }
}
