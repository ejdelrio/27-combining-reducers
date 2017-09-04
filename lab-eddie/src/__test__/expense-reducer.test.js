import expenseReducer from '../reducer/expense.js';

describe('Expense Reducer Test', () => {
  let state = {
    1234: [
      {
        title: 'milk',
        budget: 5,
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
  test('Should return a state with a new expense added', () => {
    let newExpense = {title:
      'bacon',
      budget: 200,
      id: 999,
      published: new Date(),
      categoryID: 1234

    }
    let target = {type: 'EXPENSE_CREATE', payload: newExpense}
    let testResult = expenseReducer(state, target);
    console.log('RESULT: ', testResult);
    expect(testResult[1234].length).toEqual(2);
    expect(testResult[1234][0]).toBe(state[1234][0]);
    expect(testResult[1234][1]).toEqual(newExpense);
  });
  test('Should return a state with a modified target', () => {
    let modExpense = state[1234][0]
    modExpense.title = 'cake'
    let target = {type: 'EXPENSE_UPDATE', payload: modExpense}
    let testResult = expenseReducer(state, target)[1234];
    expect(testResult.length).toEqual(1);
    expect(testResult[0]).toBe(modExpense);
  });
  test('Should return the initial state', () => {
    let target = {type: 'EXPENSE_RESET', payload: state[1234][0]}
    let testResult = expenseReducer(state, target)[1234];
    expect(testResult.length).toEqual(1);
    expect(testResult[0]).toBe(state[1234][0]);
  });

  test('Should return a new category property with an empty array', () => {
    let testCat = {
      title: 'test',
      budget: 2,
      id: 666,
      published: new Date(),
    }
    let target = {type: 'CATEGORY_CREATE', payload: state[1234][0]}
    let testResult = expenseReducer(state, target)[666];
    expect(testResult.length).toEqual(0);
  });
  test('Should return a set the category property to undefined', () => {

    let target = {type: 'CATEGORY_DELETE', payload: state[1234][0]}
    let testResult = expenseReducer(state, target)[1234];
    expect(testResult).toEqual(undefined);
  });
});
