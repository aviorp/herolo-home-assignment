import React from 'react';
import { shallow } from 'enzyme';
import DaysCard from './DaysCard';

describe('<DaysCard />', () => {
  test('renders', () => {
    const wrapper = shallow(<DaysCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
