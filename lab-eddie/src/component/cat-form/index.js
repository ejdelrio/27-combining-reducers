import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.category ? {...props.category} :
    {
      title: '',
      budget: 0,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit(e) {
    e.preventDefault();
    let tempCat = Object.assign({}, this.state);
    tempCat.budget = parseInt(tempCat.budget);
    if(this.props.category) tempCat.id = this.props.category.id;
    if(this.props.categoryID) tempCat.categoryID = this.props.categoryID;

    this.props.onComplete(tempCat);
  }

  render() {
    let cat = this.props.category;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type='text'
          name='title'
          required={true}
          onChange={this.onChange}
          value={this.state.title}
          placeholder={cat ? cat.title :'Enter Title'}
        />
        <input
          type='number'
          name='budget'
          required={true}
          onChange={this.onChange}
          value={this.state.budget}
          placeholder={cat ? cat.budget :'Enter $ Amount'}
        />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}

export default CategoryForm;
