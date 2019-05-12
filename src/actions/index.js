
export const setTasks = tasks => {
  return {
    type: 'SET_TASKS',
    payload: tasks
  }
};

export const addTask = (text) => {
  return {
    type: 'ADD_TASK',
    payload: text
  }
}

export const markDone = (taskId) => {
  return {
    type: 'MARK_DONE',
    payload: taskId
  }
}

export const tasksError = errorMessage => {
  return {
    type: 'TASKS_ERROR'
  }
};