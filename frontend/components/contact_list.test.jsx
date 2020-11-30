import { shallow } from 'enzyme';
import React from 'react';

import ContactList from './contact_list';

describe('ContactList', () => {
  it('should render', () => {
    const component = shallow(<ContactList url="/test" />);

    expect(component).toMatchSnapshot();
  });
});
