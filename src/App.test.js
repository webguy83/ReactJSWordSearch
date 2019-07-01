import React from 'react';
import App from './App';
import InputSearch from './components/InputSearch/InputSearch';
import GuessedWords from './components/GuessedWords/GuessedWords';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { shallow } from 'enzyme';

configure({
  adapter: new Adapter()
})

const setup = (props, state) => {
  return shallow(<App {...props} />)
}

const findElemAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
}

it('renders without crashing', () => {
  const wrapper = setup();
  expect(wrapper.length).toBe(1);
});

it('renders with an input component', () => {
  const wrapper = setup();
  expect(wrapper.find(InputSearch).length).toBe(1);
});

it('renders a guessed words component', () => {
  const wrapper = setup();
  expect(wrapper.find(GuessedWords).length).toBe(1);
})