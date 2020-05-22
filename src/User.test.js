import React from 'react';
import { shallow } from 'enzyme';
import User from './components/User';

// We will describe a block of tests
describe('user component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<User />);
    // We create an assertion within the test that checks if our component renders our name prop
    expect(component.contains(<h2>sign in</h2>)).toBe(true);
  });
});