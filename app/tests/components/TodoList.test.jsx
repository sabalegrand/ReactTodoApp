import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList', function() {
  it('should exist', function() {
    expect(TodoList).toExist();
  });

  it('should render 1 todo component for each todo item', function() {
    const todos = [
      {
        id: 1,
        text: 'Todo tg'
      },
      {
        id: 2,
        text: 'ok va manger'
      }
    ];
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    const todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo)


    expect(todoComponents.length).toBe(todos.length);

  });

  it('should render empty message if no todos', function() {
    const todos = [];
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    const $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
