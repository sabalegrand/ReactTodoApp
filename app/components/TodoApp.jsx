import React from 'react';
import uuid from 'node-uuid';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

class TodoApp extends React.Component {

  constructor() {
    super();
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Todo tg'
        },
        {
          id: uuid(),
          text: 'ok va manger'
        }
      ]
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleAddTodo (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text
        }
      ]
    });
  }

  handleSearch (showCompleted, searchText) {
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase()
    });
  }

  render() {

    const { todos } = this.state;

    return (
    <div>
      <TodoSearch onSearch={this.handleSearch} />
      <TodoList todos={todos} />
      <AddTodo onAddTodo={this.handleAddTodo} />
    </div>
    );
  }

}

export default TodoApp;
