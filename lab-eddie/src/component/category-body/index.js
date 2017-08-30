import React from 'react';
import CategoryForm from '../cat-form';
import {connect} from 'react-redux';
import {categoryUpdate, categoryDelete} from '../../action/category-action.js';
import {expenseUpdate, expenseCreate, expenseDelete} from '../../action/expense-action.js';

class CategoryBody extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.categoryDelete(this.props.category)
  }

  render() {
    return(
      <div>
        <h3>{this.props.category.title}</h3>
        <p>{`Budget: ${this.props.category.budget}`}</p>
        <button onClick={this.onClick}>{this.props.buttonText}</button>
        <CategoryForm
          category={this.props.category}
          onComplete={this.props.categoryUpdate}
          buttonText='Update'
        />
        <CategoryForm
          categoryID={this.props.category.id}
          onComplete={this.props.expenseCreate}
          buttonText='Add Expense'
        />


      </div>
    )
  }
}

const mapStateToProps = () => ({});

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
  expenseDelete: (category) => dispatch(expenseDelete(category)),
  expenseUpdate: (category) => dispatch(expenseUpdate(category)),
  expenseCreate: (category) => dispatch(expenseCreate(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBody);
