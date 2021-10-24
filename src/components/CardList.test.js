import { shallow, mount, render,configure } from 'enzyme';
import React from 'react';
import { CardList } from './CardList';
import Adapter from 'enzyme-adapter-react-16';  

configure({ adapter: new Adapter() });

it('expect to render CardList Component', () => {

    const mockRobots = [
        {
            id: 1,
            name: 'John Doe',
            email: 'doe@gmail.com',
            username: 'JohnJohn'
        }
    ]

    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot()    
});

