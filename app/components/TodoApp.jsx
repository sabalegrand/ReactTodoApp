import React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import TodoAPI from 'TodoAPI';

class TodoApp extends React.Component {

  constructor() {
    super();
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleTodoClick = this.handleTodoClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    TodoAPI.setTodos(this.state.todos);
  }

  handleAddTodo (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
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
        completed: !todo.completed,
        createdAt: todo.createdAt,
        completedAt: !todo.completed ? moment().unix() : undefined
      });
    });

    this.setState({
      todos
    });
  }

  render() {

    const { todos, showCompleted, searchText } = this.state;
    const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);


    return (
    <div>
      <h1 className="page-title">Todo App</h1>

      <div className="row">
        <div className="column small-centered small-11 medium-6 large-5">
          <div className="container">
            <TodoSearch onSearch={this.handleSearch} />
            <TodoList todos={filteredTodos} onTodoClick={this.handleTodoClick} />
            <AddTodo onAddTodo={this.handleAddTodo} />
          </div>
        </div>
      </div>
    </div>
    );
  }

}

export default TodoApp;
