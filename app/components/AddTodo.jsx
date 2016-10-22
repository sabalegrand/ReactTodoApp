import React from 'react';

class AddTodo extends React.Component {

  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();

    let todoTextInput = this.refs.todoTextInput;
    const todoText = todoTextInput.value;

    if(todoText.length > 0) {
      this.props.onAddTodo(todoText);
      todoTextInput.value = '';
    } else {
      todoTextInput.focus();
    }
  }

  render() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input ref="todoTextInput" type="text" placeholder="What do you need to do?"/>
          <button className="button expanded">
            Add Todo
          </button>
        </form>
      </div>
    );
  }

}

export default AddTodo;
