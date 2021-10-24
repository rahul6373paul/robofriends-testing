
import {    CHANGE_SEARCHFEILD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS } from "./constants";

 const initialStateSearch = {
     searchField: ''
 }

 export const searchRobots = (state = initialStateSearch, action={})=>{
    switch(action.type){
        case CHANGE_SEARCHFEILD:
            return { ...state, searchField: action.payload }             //Object.assign({}, state, {searchField: action.payload} )
        
        default:
            return state;    
    
    }
 }

 
 const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}


 export const requestRobots = (state = initialStateRobots, action={})=>{
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return { ...state, isPending: true }
                         //Object.assign({}, state, {searchField: action.payload} )
        case REQUEST_ROBOTS_SUCCESS:
            return { ...state, isPending: false, robots: action.payload }

        case REQUEST_ROBOTS_FAILED:
            return { ...state, isPending: false, error: action.payload }

        default:
            return state;    
    
    }
 }