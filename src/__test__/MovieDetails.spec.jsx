import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import preload from '../data/movies.json';

import { MovieDetails } from '../components';

configure({ adapter: new Adapter() });

describe('MovieDetails', () => {
  it('should be render', () => {
    const match = { params: { id: 1 } };
    const component = shallow(<MovieDetails match={match} />);
    expect(component).toMatchSnapshot();
  });

  it('should render correct the poster src', () => {
    const match = { params: { id: 1 } };
    const component = shallow(<MovieDetails match={match} />);
    expect(component.find('img').prop('src')).toEqual(preload[0].poster);
  });

  it('should render correct the img alt', () => {
    const match = { params: { id: 1 } };
    const component = shallow(<MovieDetails match={match} />);
    expect(component.find('img').prop('alt')).toEqual(preload[0].title);
  });
});
