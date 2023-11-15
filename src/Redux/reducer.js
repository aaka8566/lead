import { getrequest,getsuccess,geterror ,reset} from "./actiontype";
const initialstate={
    "locations":[],
    "isloading":false,
    "iserror":false,
    "issuccess":false
};
export const reducer=(state=initialstate,action)=>{
    switch(action.type){
        case getrequest:return {...state,isloading:true,iserror:false}
        case getsuccess:return {...state,locations:action.payload,isloading:false,issuccess:true,iserror:false }
        case geterror:return {...state,locations:[],isloading:false,iserror:true}
        case reset:return{...initialstate}
        default:return state;
    }
};