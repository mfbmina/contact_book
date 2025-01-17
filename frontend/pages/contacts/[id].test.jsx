import { shallow } from 'enzyme';
import React from 'react';

import Details from './[id]';

jest.mock('next/router', () => ({
  useRouter: () => ({ query: { id: '1' } }),
}));

describe('Index page', () => {
  it('should render', () => {
    const component = shallow(<Details />);

    expect(component).toMatchSnapshot();
  });
});
