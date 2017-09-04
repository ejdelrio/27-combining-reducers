import expenseReducer from '../reducer/expense.js';

describe('Expense Reducer Test', () => {
  let state = {
    1234: [
      {
        title: 'milk',
        buget: 5,
        published: new Date(),
        id: 666,
        categoryID: 1234
      }
    ]}
  test('Init State should be an empty object literal', () => {
    let testResult = expenseReducer({}, {type: null});
    expect(testResult).toEqual({});
  });

  test('Should return state if given invalid type', () => {
    let testResult = expenseReducer(state, {type: null});
    expect(testResult[1234].length).toEqual(1);
    expect(testResult).toBe(state);
  });
  test('Should return a state with the expense removed', () => {
    let target = {type: 'EXPENSE_DELETE', payload: state[1234][0]}
    let testResult = expenseReducer(state, target);
    expect(testResult[1234].length).toEqual(0);
    expect(testResult[1234][0]).toBe(undefined);
  });
//   // test('Should return a state with a new expense added', () => {
//   //   let newExpense = {title: 'milk', budget: 3, id: 123}
//   //   let target = {type: 'EXPENSE_CREATE', payload: newExpense}
//   //   let testResult = expenseReducer(state, target);
//   //   expect(testResult.length).toEqual(2);
//   //   expect(testResult[0]).toBe(state[0]);
//   //   expect(testResult[1]).toEqual(newExpense);
//   // });
//   // test('Should return a state with a modified target', () => {
//   //   let modExpense = state[1]
//   //   modExpense.title = 'cake'
//   //   let target = {type: 'EXPENSE_UPDATE', payload: modExpense}
//   //   let testResult = expenseReducer(state, target);
//   //   expect(testResult.length).toEqual(2);
//   //   expect(testResult[0]).toBe(state[0]);
//   //   expect(testResult[1]).toEqual(modExpense);
//   // });
//   // test('Should return the initial state', () => {
//   //   let target = {type: 'EXPENSE_RESET', payload: state[0]}
//   //   let testResult = expenseReducer(state, target);
//   //   expect(testResult.length).toEqual(state.length);
//   //   expect(testResult[0]).toBe(state[0]);
//   //   expect(testResult[1]).toEqual(state[1]);
//   // });
});
