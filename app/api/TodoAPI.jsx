import $ from 'jquery';

export default {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    let stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      todos =  JSON.parse(stringTodos);
    } catch (e) {

    }

    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function (todos, showCompleted, filter) {
    let filteredTodos = todos;

    filteredTodos = filteredTodos.filter(todo => {
      return !todo.completed || showCompleted;
    });

    filteredTodos = filteredTodos.filter(todo => {
      return !filter ? true : (todo.text.toLowerCase().indexOf(filter) > -1);
    });

    filteredTodos = filteredTodos.sort( (a,b) => {
      return a.completed;
    })

    return filteredTodos;
  }
}
