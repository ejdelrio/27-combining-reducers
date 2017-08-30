import React from 'react';
import CategoryBody from '../category-body'
import CategoryForm from '../cat-form'

class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const childJSXDuplicate = (source, parentID) => {
      if(!this.props.children) return null;
      return React.Children.map(this.props.children, child => {
        return React.cloneElement(child, {
          source: source,
          categoryID: parentID
        })
      })
    }
    let childSource = this.props.childSource;

    return(
      <span>
        <CategoryForm
          onComplete={this.props.formComplete}
          buttonText={this.props.formText}
          categoryID={this.props.categoryID}
        />
        <ul>
          {this.props.source.map(item => {
            return(
              <li key={item.id}>
                <CategoryBody
                  buttonText={this.props.bodyText}
                  category={item}
                  categoryID={this.props.categoryID}
                  onComplete={this.props.bodyComplete}
                  secondForm={this.props.secondForm}
                />
                {!childSource ? null :
                  childJSXDuplicate(childSource[item.id], item.id)}
              </li>
            )
          })}
          </ul>
      </span>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    expense: state.expense
  }
}

export default Category;
