import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import ContactDetails from './contact_details';

describe('ContactDetails', () => {
  it('should render', () => {
    const component = shallow(<ContactDetails id="1" /> );

    expect(component).toMatchSnapshot();
  });
});
