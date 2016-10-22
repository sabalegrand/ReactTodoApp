import React from 'react';
import moment from 'moment';

class Todo extends React.Component {


  render() {
    const {id, text, completed, createdAt, completedAt} = this.props;
    let todoClassName = completed ? 'todo todo-completed' : 'todo';
    const renderDate = () => {
      let message = 'Created ';
      let timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message +  moment.unix(timestamp).format('MMMM Do, YYYY @ h:mm A');
    }

    return (
      <div className={todoClassName} onClick={() => {
          this.props.onTodoClick(id);
        }} >
        <div>
          <input type="checkbox" checked={completed} />
        </div>
         <div>
           <p>{text}</p>
           <p className="todo__subtext">{renderDate()}</p>
         </div>
      </div>
    );
  }

}

export default Todo;
