import trelloContent from '../trelloContent';

export default function(){
    let x= window.localStorage.getItem("trelloContent")
		if (!x)	{
			x= trelloContent.data
        }
        else{
            x=JSON.parse(x)
        }
    return x
}