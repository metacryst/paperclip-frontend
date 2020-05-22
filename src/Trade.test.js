import React from 'react';
import { shallow } from 'enzyme';
import Trade from './components/Trade';


// We will describe a block of tests
describe('trade component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<Trade />);
    // We create an assertion within the test that checks if our component renders our name prop
    expect(component.contains(<h2>trade:</h2>)).toBe(true);
  });
});