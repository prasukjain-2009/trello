import trelloContent from '../trelloContent';

 function reducerData(){
    let x= window.localStorage.getItem("trelloContent")
		if (!x)	{
			x= trelloContent.data
        }
        else{
            x=JSON.parse(x)
        }
    return x
}
export default reducerData;