
import {    
CHANGE_SEARCHFEILD,
REQUEST_ROBOTS_FAILED,
REQUEST_ROBOTS_PENDING,
REQUEST_ROBOTS_SUCCESS } from "./constants";

import * as reducers from './reducers';

describe('searchRobots', ()=> {

    const initialStateSearch = {
        searchField: ''
    }

    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
    });  
    
    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCHFEILD,
            payload: 'abc'
        })).toEqual({ searchField: 'abc' })
    });  
})