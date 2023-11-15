import { getrequest,getsuccess,geterror,reset } from "./actiontype";
import axios from "axios";
export const GETREQUEST=()=>{
return {type:getrequest};
};
export const GETSUCCESS=(payload)=>{
    return {type:getsuccess,payload};
    };
    export const GETERROR=()=>{
        return {type:geterror};
        };
        export const RESET=()=>{
            return {type:reset};
            };

export const getalllocationsuccess=(pin)=>async(dispatch)=>{
dispatch(GETREQUEST());
try{
const response=await axios.get(`https://api.zippopotam.us/in/${pin}`);
const data=response.data;
//console.log(data);
dispatch(GETSUCCESS(data));
}
catch{
dispatch(GETERROR());
}
}        