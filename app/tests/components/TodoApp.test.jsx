import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import TodoApp from 'TodoApp';

describe('TodoApp', function() {
  it('should exist', function() {
    expect(TodoApp).toExist();
  });
});
