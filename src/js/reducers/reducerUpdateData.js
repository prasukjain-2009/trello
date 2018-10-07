
import reducerData from './reducerData';
function reducerUpdateData(state=null,action){
    switch (action.type){
        case "UPDATE_BOARD":
            window.localStorage.setItem("trelloContent",action.payload)
        default:
            return state            
    }
}
export default reducerUpdateData;