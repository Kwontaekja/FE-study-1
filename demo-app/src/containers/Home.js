import React, { Component } from 'react';
import AddTodo from '/Users/carplat/Desktop/vs-code/FE-study/FE-study-1/FE-study-1/demo-app/src/components/AddTodo.js';
import Table from '/Users/carplat/Desktop/vs-code/FE-study/FE-study-1/FE-study-1/demo-app/src/components/Table.js';

class Home extends Component {
  state = {
    todos: [],
  };

  handleSubmit = (todo) => {
    this.setState({ todos: [...this.state.todos, todo] });
  };

  removeTodo = (index) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo, i) => {
        return i !== index;
      }),
    });
  };

  render() {
    return (
      <div className='TodoList'>
        <AddTodo handleSubmit={this.handleSubmit} />
        <Table todoList={this.state.todos} removeTodo={this.removeTodo} />
      </div>
    );
  }
}

export default Home;
