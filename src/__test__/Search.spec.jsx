import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import preload from '../data/movies.json';

import { Search, MovieCard } from '../components';

configure({ adapter: new Adapter() });

describe('Search', () => {
  it('should be render', () => {
    const component = shallow(<Search />);
    expect(component).toMatchSnapshot();
  });

  it('should render right amount of movies', () => {
    const component = shallow(<Search />);
    expect(component.find(MovieCard).length).toEqual(preload.length);
  });

  it('should render right ammount of movies based on input search', () => {
    const searchText = 'Galaxy';
    const component = shallow(<Search />);
    const input = component.find('input');
    input.simulate('change', { target: { value: searchText } });

    expect(component.find(MovieCard).length).toEqual(1);
  });

  it('should render 0 movies based on input search', () => {
    const searchText = 'test_fake';
    const component = shallow(<Search />);
    const input = component.find('input');
    input.simulate('change', { target: { value: searchText } });

    expect(component.find(MovieCard).length).toEqual(0);
  });
});
