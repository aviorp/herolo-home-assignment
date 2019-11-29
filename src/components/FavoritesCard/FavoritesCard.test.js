import React from 'react';
import { shallow } from 'enzyme';
import FavoritesCard from './FavoritesCard';

describe('<FavoritesCard />', () => {
  test('renders', () => {
    const wrapper = shallow(<FavoritesCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
