import {combineReducers} from 'redux';
import expenseReducer from './expense.js';
import categoriesReducer from './category.js';

export default combineReducers({
  expense: expenseReducer,
  categories: categoriesReducer
});
