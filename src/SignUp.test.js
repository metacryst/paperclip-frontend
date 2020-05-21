import React from 'react';
import { shallow } from 'enzyme';
import SignUp from './components/SignUp';


// We will describe a block of tests
describe('Signup component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<SignUp />);
    // We create an assertion within the test that checks if our component renders our name prop
    expect(component.contains(<h2>Sign Up</h2>)).toBe(true);
  });
});