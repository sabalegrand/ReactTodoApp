import React from 'react';

import Todo from 'Todo';

class TodoList extends React.Component {



  render() {
    let {todos} = this.props;


    const renderTodos = () => {
      if ( todos.length === 0) {
        return (
          <p className="container__message">Nothing to do</p>
        );
      }

      return todos.map(todo =>
        <Todo key={todo.id} {...todo} onTodoClick={this.props.onTodoClick}/>
      );
    }

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }

}

export default TodoList;
