import React from 'react';
import { shallow } from 'enzyme';
import MainIcon from './MainIcon';

describe('<MainIcon />', () => {
  test('renders', () => {
    const wrapper = shallow(<MainIcon />);
    expect(wrapper).toMatchSnapshot();
  });
});
