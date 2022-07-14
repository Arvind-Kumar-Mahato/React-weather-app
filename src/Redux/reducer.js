import { ADDDATA,DAYTEMP, ADDTEMP, SUNRISE} from "./action";

const obj = {
    data:[],
    sunrise:[],
    temp:null,
    day:null

};

export const reducer = (store = obj, {type,payload} )=>{
 if(type === ADDDATA){
    return {...store, data:payload};
 }

 else if(type === ADDTEMP){
    return {...store, temp:payload};
 }

 else if(type === DAYTEMP){
    return {...store, day: payload};
 }
 else if(type === SUNRISE){
    return {...store, sunrise:payload};
 }

 else{
    return store;
 }
};