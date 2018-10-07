export default function(state=null,action){
    
    switch (action.type){
        case "BOARD_SELECTED":
            return action.payload
        default:
            return "Kubric UI";
    }
}