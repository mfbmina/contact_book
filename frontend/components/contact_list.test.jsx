import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import ContactList from './contact_list';

describe('ContactList', () => {
  it('should render', () => {
    const component = shallow(<ContactList url="/test" />);

    expect(component).toMatchSnapshot();
  });
});
