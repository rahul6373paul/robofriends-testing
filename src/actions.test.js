
// import * as actions from './actions';

// import configureMockStore from 'redux-mock-store';
// import thunkMiddleware from 'redux-thunk';

// import {    
//     CHANGE_SEARCHFEILD,
//     REQUEST_ROBOTS_FAILED,
//     REQUEST_ROBOTS_PENDING,
//     REQUEST_ROBOTS_SUCCESS } from "./constants";

// describe('ActinRobots', ()=> {

//     const mockStore = configureMockStore([thunkMiddleware]);

//     const initialStateSearch = {
//         searchField: ''
//     }

//     it('should create an action to search robots', () => {

//         const text = "wooooo!";
//         const expectedAction = {
//             type: CHANGE_SEARCHFIELD,
//             payload: text
//         }
//         expect(actions.setSearchField(text)).toEqual(expectedAction)
//     });  
    
//     it('handles requesting robots API', () => {
//         const store = mockStore();
//         store.dispatch(actions.requestRobots());
//         const action = store.getActions();
//         const expectedAction = {
//             type: REQUEST_ROBOTS_PENDING
//         }
//         expect(action[0]).toEqual(expectedAction)
//     });  
// })