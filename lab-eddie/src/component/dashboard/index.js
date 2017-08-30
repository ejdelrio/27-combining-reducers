import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../cat-form';
import CategoryBody from '../category-body';
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
    let expense = this.props.expense;
    return (
      <main className='dashboard'>
        <h1>{'Eddie\'s Kick Ass Dashboard :D'}</h1>
        <CategoryForm
          onComplete={this.props.categoryCreate}
          buttonText='Add Category'
        />
        <ul>
          {this.props.categories.map(cat => {
            return (
            <li key={cat.id}>
              <CategoryBody
                buttonText='Remove'
                category={cat}
                onComplete={this.props.categoryDelete}
                secondForm={this.props.categoryUpdate}
              />
              <CategoryForm
                categoryID={cat.id}
                onComplete={this.props.expenseCreate}
                buttonText='Add Expense'
              />
              <ul>
                {expense[cat.id].map(exp => {
                  return (
                    <li key={cat.id}>
                      <CategoryBody
                        buttonText={'Delete Expense'}
                        category={exp}
                        categoryID={cat.id}
                        onComplete={this.props.expenseDelete}
                        secondForm={this.props.expenseUpdate}
                      />
                    </li>
                  )
                })}
              </ul>
            </li>
            );
          })}
        </ul>
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
