import React from 'react';
import CategoryForm from '../cat-form';
import {connect} from 'react-redux';
import {categoryUpdate, categoryDelete} from '../../action/category-action.js';

class CategoryBody extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onComplete(this.props.category)
  }

  render() {
    let currentExpense = this.props.expense[this.props.category.id];
    return(
      <span>
        <h3>{this.props.category.title}</h3>
        <p>{`Budget: ${this.props.category.budget}`}</p>
        <button onClick={this.onClick}>{this.props.buttonText}</button>
        <CategoryForm
          categoryID={this.props.categoryID}
          category={this.props.category}
          onComplete={this.props.secondForm}
          buttonText='Update'
        />
      </span>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    expense: state.expense
  }
}


export default connect(mapStateToProps)(CategoryBody);
