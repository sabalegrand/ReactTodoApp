import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import Todo from 'Todo';

describe('Todo', function() {
  it('should exist', function() {
    expect(Todo).toExist();
  });

  it('should call onTodoClick prop with id on click ', function() {
    let todoData = [
      {
        id: 111,
        text: "ok",
        completed: true
      }
    ];
    let spy = expect.createSpy();
    const todo = TestUtils.renderIntoDocument(<Todo {...todoData} onTodoClick={spy} />);
    const $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(todoData.id);
  });
});
