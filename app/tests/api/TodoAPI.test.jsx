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

  describe('filterTodos', function() {
    let todos = [
      {
        id: 1,
        text: 'saba est',
        completed: true
      },
      {
        id: 2,
        text: 'est un grand',
        completed: false
      },
      {
        id: 3,
        text: 'connard',
        completed: false
      }
    ];

    it('should return all item if show completed is true', function() {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });

    it('should return completed item if show completed is false', function() {
      const filteredTodos = TodoAPI.filterTodos(todos, false, '');

      expect(filteredTodos.length).toBe(2);
    });

    it('should sort by completed status', function() {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by search text', function() {
      const filteredTodos = TodoAPI.filterTodos(todos, true, 'est');

      expect(filteredTodos.length).toBe(2);
    });

    it('should return all todos if searchText is empty', function() {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });

  });
});
