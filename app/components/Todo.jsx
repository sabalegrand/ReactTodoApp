import React from 'react';
import moment from 'moment';

class Todo extends React.Component {


  render() {
    const {id, text, completed, createdAt, completedAt} = this.props;
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
      <div onClick={() => {
          this.props.onTodoClick(id);
        }} >
        <input type="checkbox" checked={completed} />
         <p>{text}</p>
         <p>{renderDate()}</p>
      </div>
    );
  }

}

export default Todo;
