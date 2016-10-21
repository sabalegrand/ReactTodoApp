import React from 'react';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

class TodoApp extends React.Component {

  constructor() {
    super();
    this.state = {
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
  }

  handleAddTodo (text) {
    alert('new todo ' + text);
  }

  render() {

    const { todos } = this.state;

    return (
    <div>
      <TodoList todos={todos} />
      <AddTodo onAddTodo={this.handleAddTodo} />
    </div>
    );
  }

}

export default TodoApp;
