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
          text: 'Todo tg',
          completed: false
        },
        {
          id: uuid(),
          text: 'ok va manger',
          completed: true
        }
      ]
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleTodoClick = this.handleTodoClick.bind(this);
  }

  handleAddTodo (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text,
          completed: false
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

  handleTodoClick (todoId) {
    let todos = this.state.todos.map( todo => {
      if (todo.id !== todoId) {
        return todo;
      }

      return Object.assign({}, {
        id: todoId,
        text: todo.text,
        completed: !todo.completed
      });
    });

    this.setState({
      todos
    });
  }

  render() {

    const { todos } = this.state;

    return (
    <div>
      <TodoSearch onSearch={this.handleSearch} />
      <TodoList todos={todos} onTodoClick={this.handleTodoClick} />
      <AddTodo onAddTodo={this.handleAddTodo} />
    </div>
    );
  }

}

export default TodoApp;
