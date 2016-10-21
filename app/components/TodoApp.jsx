import React from 'react';

import TodoList from 'TodoList';

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

  render() {

    const { todos } = this.state;

    return (
    <div>
      <TodoList todos={todos} />
    </div>
    );
  }

}

export default TodoApp;
