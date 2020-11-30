import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Layout from './layout';

describe('Layout', () => {
  it('should render', () => {
    const component = shallow(<Layout title="test"><p>Testing</p></Layout>);

    expect(component).toMatchSnapshot();
  });
});
