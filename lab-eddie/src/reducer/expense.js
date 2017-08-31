'use strict'
const validateCat = (item) => {
  if(!item.id || !item.title || !item.budget || !item.published) {
    throw new Error('VALIDATION ERROR: item must include budget, timestamp, title and id');
  }
}
const validateExpense = (item) => {
  if(!item.id || !item.title || !item.budget || !item.published || !item.categoryID) {
    throw new Error('VALIDATION ERROR: item must include budget, timestamp, title, categoryID and id');
  }
}


let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type) {
    case 'CATEGORY_CREATE':
      validateCat(payload);
      return {...state, [payload.id] : []};
    case 'CATEGORY_DELETE':
      validateCat(payload);
      return {...state, [payload.id]: undefined};
    case 'EXPENSE_CREATE':
      validateExpense(payload);
      var {categoryID} = payload;
      let categoryExpenses = state[categoryID];
      return {...state, [categoryID]: [...categoryExpenses, payload]};
    case 'EXPENSE_UPDATE':
      validateExpense(payload);
      var {categoryID} = payload;
      var categoryExpenses = state[categoryID];
      var modifiedCategory = categoryExpenses.map(expense => {
        return expense.id === payload.id ? payload : expense;
      })
      return {...state, [categoryID]: [...modifiedCategory]};
    case 'EXPENSE_DELETE':
      validateExpense(payload);
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
