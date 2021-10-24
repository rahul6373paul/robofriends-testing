import { shallow, mount, render,configure } from 'enzyme';
import React from 'react';
import Card from './Card';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('expect to render Card Component', () => {
    expect(shallow(<Card />).length).toEqual(1)    
});

