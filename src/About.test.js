import React from 'react';
import { shallow } from 'enzyme';
import About from './components/About';


// We will describe a block of tests
describe('About component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<About />);
    // We create an assertion within the test that checks if our component renders our name prop
    expect(component.contains(<p>designed by Sam Russell, Brian Guayante, and Trent Lehmann 2020.</p>)).toBe(true);
  });
});