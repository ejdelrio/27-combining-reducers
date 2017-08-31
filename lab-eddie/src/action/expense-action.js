'use strict';

import uuid from 'uuid/v1';

export const expenseCreate = (cat) => {
  return {
    type: 'EXPENSE_CREATE',
    payload: {...cat, id: uuid(), published: new Date()}
  };
};

export const expenseUpdate = (cat) => {
  return {
    type: 'EXPENSE_UPDATE',
    payload: {...cat}
  };
};

export const expenseDelete = (cat) => {
  return {
    type: 'EXPENSE_DELETE',
    payload: {...cat}
  };
};

export const expenseReset = () => ({type: 'EXPENSE_RESET'});
