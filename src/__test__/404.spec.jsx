import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import preload from '../data/movies.json';

import { NotFound } from '../components';

configure({ adapter: new Adapter() });

describe('NotFound', () => {
  it('should be render', () => {
    const component = shallow(<NotFound />);
    expect(component).toMatchSnapshot();
  });
});
