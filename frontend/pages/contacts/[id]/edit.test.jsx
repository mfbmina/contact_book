import { shallow } from 'enzyme';
import React from 'react';

import EditContact from './edit';

jest.mock('next/router', () => ({
  useRouter: () => ({ query: { id: '1' } }),
}));

describe('Index page', () => {
  it('should render', () => {
    const component = shallow(<EditContact />);

    expect(component).toMatchSnapshot();
  });
});
