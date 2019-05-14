import React from 'react';
import { connect } from 'react-redux';
import { markDone } from '../actions';

import TaskItem from './TaskItem';

class TaskList extends React.Component {

  markDone = (task) => {
    this.props.markDone(task.id);
  }

  render() {
    const taskItems = this.props.tasks.map(task => {
      return <TaskItem task={task} key={task.id} markDone={this.markDone} />
    });

    return (
      <ul className="task-list list-group">
        { taskItems }
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  };
}

export default connect(mapStateToProps, { markDone })(TaskList);