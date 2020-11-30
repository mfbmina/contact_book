import { shallow } from 'enzyme';
import React from 'react';

import ContactListItem from './contact_list_item';

describe('ContactListItem', () => {
  it('should render', () => {
    const component = shallow(<ContactListItem
      id="1"
      first_name="Matheus"
      last_name="Mina"
      phone_number="000-000-000"
      email="matheus@mina.com"
    />);

    expect(component).toMatchSnapshot();
  });
});
