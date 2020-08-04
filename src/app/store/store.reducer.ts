import { GridData } from '../grid-data';
import { loadDataAction, gridEnum, gridActionTypes } from './store.action';

export const initialState=[{
    make:"HOnda", 
    model: "CRV", 
    price: 1,
    delete:"22"
}]

export function gridReducer(state=initialState,action:gridEnum){
switch(action.type){
    case  gridActionTypes.ADD_DATA:
        
        return [...state, action.payLoad];

    case gridActionTypes.DELETE_DATA:
        let updatedArray;
        return state.filter((item,index)=>{
            return index!=state.length-1;
        })
       
    default:
        console.log(state)
        return state;
}
}