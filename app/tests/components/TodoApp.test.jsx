import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import TodoApp from 'TodoApp';

describe('TodoApp', function() {
  it('should exist', function() {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', function() {
    const todoText = 'saba le génie';
    const todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);

  });
});
