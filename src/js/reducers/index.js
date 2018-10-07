import { combineReducers } from 'redux';
import BoardReducers from './reducerBoards';
import reducer_active_board from './reducerActiveBoard';

const rootReducer = combineReducers({
  data:BoardReducers,
  activeBoard:reducer_active_board
});

export default rootReducer;
