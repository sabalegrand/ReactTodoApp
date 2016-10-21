import React from 'react';

import Todo from 'Todo';

class TodoList extends React.Component {



  render() {
    const todos = this.props.todos.map(todo =>
      <Todo key={todo.id} {...todo} onTodoClick={this.props.onTodoClick}/>
    );

    return (
      <div>
        {todos}
      </div>
    );
  }

}

export default TodoList;
