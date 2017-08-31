import categoryReducer from '../reducer/category.js'

describe('Category Reducer Test', () => {
  let state = [
    {
      title: 'title',
      budget: 5,
      id: 12345
    },
    {
      title: 'titleTwo',
      budget: 666,
      id: 999
    }
  ]
  test('Init State should be an empty array', () => {
    let testResult = categoryReducer([], {type: null});
    expect(testResult.length).toEqual(0);
    expect(testResult).toEqual([]);
  })

  test('Should return state if given invalid type', () => {
    let testResult = categoryReducer(state, {type: null});
    expect(testResult.length).toEqual(2);
    expect(testResult[0]).toBe(state[0]);
  })
  test('Should return a state with the category removed', () => {
    let target = {type: 'CATEGORY_DELETE', payload: state[1]}
    let testResult = categoryReducer(state, target);
    expect(testResult.length).toEqual(1);
    expect(testResult[0]).toBe(state[0]);
    expect(testResult[1]).toBe(undefined);
  })
  test('Should return a state with a new category added', () => {
    let newCategory = {title: 'milk', budget: 3, id: 123}
    let target = {type: 'CATEGORY_CREATE', payload: newCategory}
    let testResult = categoryReducer(state, target);
    expect(testResult.length).toEqual(2);
    expect(testResult[0]).toBe(state[0]);
    expect(testResult[1]).toEqual(newCategory);
  })
  test('Should return a state with a modified target', () => {
    let modCategory = state[1]
    modCategory.title = 'cake'
    let target = {type: 'CATEGORY_UPDATE', payload: modCategory}
    let testResult = categoryReducer(state, target);
    expect(testResult.length).toEqual(2);
    expect(testResult[0]).toBe(state[0]);
    expect(testResult[1]).toEqual(modCategory);
  })
  test('Should return the initial state', () => {
    let target = {type: 'CATEGORY_RESET', payload: state[0]}
    let testResult = categoryReducer(state, target);
    expect(testResult.length).toEqual(state.length);
    expect(testResult[0]).toBe(state[0]);
    expect(testResult[1]).toEqual(state[1]);
  })
})
