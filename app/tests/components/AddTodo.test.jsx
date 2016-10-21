import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import AddTodo from 'AddTodo';


describe('AddTodo', function() {
  it('should exist', function() {
    expect(AddTodo).toExist();
  });

  it('should call onAddTodo call with valid data', function() {
    const spy = expect.createSpy();
    const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    const $el = $(ReactDOM.findDOMNode(addTodo));
    const todoText = 'ok mon petit monsieur';

    addTodo.refs.todoTextInput.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);

  });

  it('should not call onAddTodo call with invialid data', function() {
    const spy = expect.createSpy();
    const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    const $el = $(ReactDOM.findDOMNode(addTodo));
    const todoText = '';

    addTodo.refs.todoTextInput.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();

  });
});
