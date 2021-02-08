import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the heading', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.find('h1').text()).toBe('Hello React');
});

it('renders the paragraph', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.find('p').text()).toBe('Nice TDD');
});

it('generates a label', () => {
  const a = new App({});
  expect(a.label()).toBe('Hello React');
});