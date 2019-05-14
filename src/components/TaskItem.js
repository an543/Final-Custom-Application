import React from 'react';

const TaskItem = props => {
  return (
    <li className="list-group-item">
      Name:
        { props.task.name }
        <br></br>
        Balance:
        { props.task.balance }
      <button type="button"
              onClick={() => props.markDone(props.task)}
              className="btn btn-primary" style={{ float: 'right' }}>
        Done
      </button>
        <button type="button"
                onClick={() => props.markDone(props.task)}
                className="btn btn-primary" style={{ float: 'right' }}>
            Done
        </button>
        <button type="button"
                onClick={() => props.markDone(props.task)}
                className="btn btn-primary" style={{ float: 'right' }}>
            test
        </button>
    </li>
  )
};

export default TaskItem;