import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import ContactForm from './contact_form';

describe('ContactForm', () => {
  it('should render', () => {
    const component = shallow(<ContactForm url="/test" method="POST" />);

    expect(component).toMatchSnapshot();
  });
});