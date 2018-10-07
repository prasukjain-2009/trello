import { combineReducers } from 'redux';
import BoardReducers from './reducer_boards';
import reducer_active_board from './reducer_active_board';

const rootReducer = combineReducers({
  data:BoardReducers,
  activeBoard:reducer_active_board
});

export default rootReducer;
