import React from 'react';

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
          id: 1,
          text: 'Todo tg'
        },
        {
          id: 2,
          text: 'ok va manger'
        }
      ]
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleAddTodo (text) {
    alert('new todo ' + text);
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
