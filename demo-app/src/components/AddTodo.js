import React, { Component } from 'react';

class AddTodo extends Component {
  initialState = {
    category: '',
    job: '',
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { category, job } = this.state;

    return (
      <div>
        <br />
        <form>
          <label htmlFor='category'>Category</label>
          &nbsp;
          <input
            type='text'
            name='category'
            id='categoty'
            value={category}
            onChange={this.handleChange}
            //   defaultValue='Category'
          />
          &nbsp;
          <label htmlFor='job'>Job</label>
          &nbsp;
          <input
            type='text'
            name='job'
            id='job'
            value={job}
            onChange={this.handleChange}
            //   defaultValue='Job'
          />
          &nbsp;
          <input type='button' value='Add' onClick={this.submitForm} />
        </form>
      </div>
    );
  }
}

export default AddTodo;
