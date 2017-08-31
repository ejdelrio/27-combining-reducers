import {
  expenseCreate,
  expenseUpdate,
  expenseDelete} from '../action/expense-action.js'

describe('Expense Action Test', () => {
  test('expenseCreate returns a EXPENSE_CREATE action', () => {
    let action = expenseCreate({title: 'snot crust', budget: 30});
    expect(action.type).toEqual('EXPENSE_CREATE');
    expect(action.payload.title).toBe('snot crust');
    expect(action.payload.budget).toEqual(30);
    expect(action.payload.id).toBeTruthy();
    expect(action.payload.published).toBeTruthy();
  })

  test('expenseUpdate returns a EXPENSE_UPDATE action', () => {
    let example = expenseCreate({title: 'snot crust', budget: 30}).payload;
    let action = expenseUpdate(example);
    expect(action.type).toEqual('EXPENSE_UPDATE');
    expect(action.payload.title).toEqual(example.title);
    expect(action.payload.budget).toEqual(example.budget);
    expect(action.payload.id).toEqual(example.id);
    expect(action.payload.published).toEqual(example.published);
  })
  test('expenseUpdate returns a EXPENSE_DELETE action', () => {
    let example = expenseCreate({title: 'snot crust', budget: 30}).payload;
    let action = expenseDelete(example);
    expect(action.type).toEqual('EXPENSE_DELETE');
    expect(action.payload.title).toEqual(example.title);
    expect(action.payload.budget).toEqual(example.budget);
    expect(action.payload.id).toEqual(example.id);
    expect(action.payload.published).toEqual(example.published);
  })
})
