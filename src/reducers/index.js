import { combineReducers } from 'redux';

import tasksReducer from './tasksReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  tasks: tasksReducer,
  errors: errorReducer
});