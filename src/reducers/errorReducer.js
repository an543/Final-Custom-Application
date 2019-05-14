
const DEFAULT_STATE = {
  getTasks: ''
};

const errorReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'GET_TODO_ERROR':
      return {
        ...state,
        getTasks: 'Unable to get Todos from API. Please Try again later'
      }
    default:
      return true;
  }
}

export default errorReducer;