import React from 'react';
import { shallow } from 'enzyme';
import MainCard from './MainCard';

describe('<MainCard />', () => {
  test('renders', () => {
    const wrapper = shallow(<MainCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
