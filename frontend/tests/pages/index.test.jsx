import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../../pages/index';

describe('Index page', () => {
  it('should render', () => {
    const component = shallow(<Home/>);

    expect(component).toMatchSnapshot();
  });
});
