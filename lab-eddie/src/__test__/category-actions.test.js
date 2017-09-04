import {
  categoryCreate,
  categoryUpdate,
  categoryDelete} from '../action/category-action.js'

describe('Category Action Test', () => {
  test('categoryCreate returns a CATEGORY_CREATE action', () => {
    let action = categoryCreate({title: 'snot crust', budget: 30});
    expect(action.type).toEqual('CATEGORY_CREATE');
    expect(action.payload.title).toBe('snot crust');
    expect(action.payload.budget).toEqual(30);
    expect(action.payload.id).toBeTruthy();
    expect(action.payload.published).toBeTruthy();
  });

  test('categoryUpdate returns a CATEGORY_UPDATE action', () => {
    let example = categoryCreate({title: 'snot crust', budget: 30}).payload;
    let action = categoryUpdate(example);
    expect(action.type).toEqual('CATEGORY_UPDATE');
    expect(action.payload.title).toEqual(example.title);
    expect(action.payload.budget).toEqual(example.budget);
    expect(action.payload.id).toEqual(example.id);
    expect(action.payload.published).toEqual(example.published);
  });
  test('categoryUpdate returns a CATEGORY_DELETE action', () => {
    let example = categoryCreate({title: 'snot crust', budget: 30}).payload;
    let action = categoryDelete(example);
    expect(action.type).toEqual('CATEGORY_DELETE');
    expect(action.payload.title).toEqual(example.title);
    expect(action.payload.budget).toEqual(example.budget);
    expect(action.payload.id).toEqual(example.id);
    expect(action.payload.published).toEqual(example.published);
  });
});
