import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI', function() {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', function() {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', function() {
    it('should set valid todos array', function() {
      const todos = [
        {
          id: 1,
          text: 'saba',
          completed: false
        }
      ];
      TodoAPI.setTodos(todos);

      const actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', function() {
      const badTodos = {a: 1}
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', function() {
    it('should return empty array for bad localstorage data', function() {
      const todos = TodoAPI.getTodos();

      expect(todos).toEqual([]);
    });

    it('should return todos if valid array in localstorage', function() {
      const todos = [
        {
          id: 1,
          text: 'saba',
          completed: false
        }
      ];
      localStorage.setItem('todos', JSON.stringify(todos));
      const actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });

  });
});
