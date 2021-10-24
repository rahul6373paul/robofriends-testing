import { shallow, mount, render,configure } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let wrapper;
beforeEach( ()=> {
    const mockProps = {
        onReqRobots: jest.fn(),
        robots: [],
        searchField: "",
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps} />)
})

it('expect to render MainPage Component', () => {
    expect(wrapper).toMatchSnapshot();    
});

it('filter robots correctly', () => {
    const mockProps2 = {
        onReqRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: "a",
        isPending: false
    }
    const wrapper2 = shallow(<MainPage {...mockProps2} />)
    expect(wrapper2.instance().filteredRobots()).toEqual([]);
    expect(wrapper2.instance().filteredRobots()).toEqual([]);

})