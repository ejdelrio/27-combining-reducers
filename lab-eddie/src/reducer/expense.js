'use strict'

let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type) {
    case 'CATEGORY_CREATE':
      return {...state, [payload.id] : []};
    case 'CATEGORY_DELETE':
      return {...state, [payload.id]: undefined};
    case 'EXPENSE_CREATE':
      var {categoryID} = payload;
      let categoryExpenses = state[categoryID];
      return {...state, [categoryID]: [...categoryExpenses, payload]};
    case 'EXPENSE_UPDATE':
      var {categoryID} = payload;
      var categoryExpenses = state[categoryID];
      var modifiedCategory = categoryExpenses.map(expense => {
        return expense.id === payload.id ? payload : expense;
      })
      return {...state, [categoryID]: [...modifiedCategory]};
    case 'EXPENSE_DELETE':
      var {categoryID} = payload;
      var categoryExpenses = state[categoryID];
      var modifiedCategory = categoryExpenses.filter(expense => {
        return expense.id !== payload.id;
      })
      return {...state, [categoryID]: [...modifiedCategory]};
    default:
      return state;
  }
}
