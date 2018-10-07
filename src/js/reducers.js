import trelloContent from './trelloContent';
import { combineReducers } from 'redux';

function reducerData() {
    let x = window.localStorage.getItem("trelloContent")
    if (!x) {
        x = trelloContent.data
    }
    else {
        x = JSON.parse(x)
    }
    return x
}

function reducerBoards() {
    return reducerData().boards
}
function reducerActiveBoard(state = null, action) {

    switch (action.type) {
        case "BOARD_SELECTED":
            return reducerData()[action.payload]
        default:

            return reducerData()["Kubric UI"];
    }
}


function reducerUpdateData(state = null, action) {
    switch (action.type) {
        case "UPDATE_BOARD":
            window.localStorage.setItem("trelloContent", JSON.stringify(action.payload));
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    updateData: reducerUpdateData,
    data: reducerData,
    board: reducerBoards,
    activeBoard: reducerActiveBoard
});

export default rootReducer;


