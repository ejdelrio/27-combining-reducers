let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type) {
    case 'CATEGORY_CREATE':
      return {...state, [payload.id] : []};
    case 'CATEGORY_DELETE':
      return {...state, [payload.id]: undefined};
    case 'EXPENSE_CREATE':
      let {categoryID} = payload;
      let categoryExpenses = state[categoryID];
      return {...state, [categoryID]: [...categoryCards, payload]};
    case 'EXPENSE_UPDATE':
      let {categoryID} = payload;
      let categoryExpenses = state[categoryID];
      let modifiedCategory = categoryExpenses.map(expense => {
        return expense.id === payload.id ? payload : expense;
      })
      return {...state, [categoryID]: [...modifiedCategory]};
    case 'DELETE_EXPENSE':
      let {categoryID} = payload;
      let categoryExpenses = state[categoryID];
      let modifiedCategory = categoryExpenses.filter(expense => {
        return expense.id !== payload.id;
      })
      return {...stat, [categoryID]: [modifiedCategory]};
    default:
      return state;
  }
}
