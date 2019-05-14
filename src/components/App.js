import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import TaskList from './TaskList';
import AddTask from './AddTask';
import { setTasks, tasksError } from "../actions";

class App extends React.Component {

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/accounts')
      .then(response => {
        this.props.setTasks(response.data);
      }).catch(error => {
        this.props.tasksError();
      });
  }

  render() {
    return (
      <div className="container">
        <AddTask />
        <TaskList />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.errors.getTasks
  };
}

export default connect(mapStateToProps, { setTasks, tasksError })(App);