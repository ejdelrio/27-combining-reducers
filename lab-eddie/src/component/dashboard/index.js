import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../cat-form';
import CategoryBody from '../category-body';
import Category from '../category'
import {
  categoryCreate,
  categoryUpdate,
  categoryDelete
} from '../../action/category-action.js'
import {
  expenseUpdate,
  expenseCreate,
  expenseDelete} from '../../action/expense-action.js';

class Dashboard extends React.Component {
  render() {
    return (
      <main className='dashboard'>
        <h1>{'Eddie\'s Kick Ass Dashboard :D'}</h1>
        <Category
          formComplete={this.props.categoryCreate}
          formText='Add Category'
          bodyText='X'
          className='cat-parent'
          source={this.props.categories}
          childSource={this.props.expense}
          bodyComplete={this.props.categoryDelete}
          secondForm={this.props.categoryUpdate}
        >
          <Category
            formComplete={this.props.expenseCreate}
            className='cat-body'
            formText='Add Expense'
            bodyText='X'
            bodyComplete={this.props.expenseDelete}
            secondForm={this.props.expenseUpdate}
          />
        </Category>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    expense: state.expense
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return{
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
    expenseDelete: (category) => dispatch(expenseDelete(category)),
    expenseUpdate: (category) => dispatch(expenseUpdate(category)),
    expenseCreate: (category) => dispatch(expenseCreate(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
