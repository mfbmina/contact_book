import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import NewContact from './new';

describe('Index page', () => {
  it('should render', () => {
    const component = shallow(<NewContact/>);

    expect(component).toMatchSnapshot();
  });
});
