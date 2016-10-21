import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import TodoSearch from 'TodoSearch';

describe('TodoSearch', function() {
  it('should exist', function() {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with valid values (test search changed)', function() {
    const searchText = 'saba';
    let spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

    todoSearch.refs.searchTextInput.value = searchText;

    TestUtils.Simulate.change(todoSearch.refs.searchTextInput);

    expect(spy).toHaveBeenCalledWith(false ,searchText);

  });

  it('should call onSearch with valid values (show completed changed)', function() {
    let spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

    todoSearch.refs.showCompletedCheckbox.checked = true;

    TestUtils.Simulate.change(todoSearch.refs.showCompletedCheckbox);

    expect(spy).toHaveBeenCalledWith(true,'');

  });
});
