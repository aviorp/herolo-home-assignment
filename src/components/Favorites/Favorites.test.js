import React from 'react';
import { shallow } from 'enzyme';
import Favorites from './Favorites';

describe('<Favorites />', () => {
  test('renders', () => {
    const wrapper = shallow(<Favorites />);
    expect(wrapper).toMatchSnapshot();
  });
});
