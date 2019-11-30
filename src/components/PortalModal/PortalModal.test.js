import React from 'react';
import { shallow } from 'enzyme';
import PortalModal from './PortalModal';

describe('<PortalModal />', () => {
  test('renders', () => {
    const wrapper = shallow(<PortalModal />);
    expect(wrapper).toMatchSnapshot();
  });
});
