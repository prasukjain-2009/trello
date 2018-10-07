import { combineReducers } from 'redux';
import reducerData from './reducerData';
import reducerBoards from './reducerBoards';
import reducerActiveBoard from './reducerActiveBoard';
import reducerUpdateData from './reducerUpdateData';

const rootReducer = combineReducers({
  updateData:reducerUpdateData,
  data:reducerData,
  board:reducerBoards,
  activeBoard:reducerActiveBoard
});

export default rootReducer;
