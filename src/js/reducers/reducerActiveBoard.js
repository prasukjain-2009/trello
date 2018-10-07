import reducerData from './reducerData';
function reducerActiveBoard(state=null,action){
    
    switch (action.type){
        case "BOARD_SELECTED":
            return reducerData()[action.payload]
        default:
            
            return reducerData()["Kubric UI"];
    }
}
export default reducerActiveBoard