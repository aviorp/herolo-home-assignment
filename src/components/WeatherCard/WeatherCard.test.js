import React from 'react';
import { shallow } from 'enzyme';
import WeatherCard from './WeatherCard';

describe('<WeatherCard />', () => {
  test('renders', () => {
    const wrapper = shallow(<WeatherCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
