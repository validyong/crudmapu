import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, { mount } from 'enzyme';
import { configure } from 'enzyme'
import ReactSeventeenAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ReactDOM from 'react-dom';

configure({ adapter: new ReactSeventeenAdapter() })

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the app and the heading', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('h1').text())
        .toBe('Hello React');
    expect(wrapper.find('.counter label').text())
        .toBe('Current');
    expect(wrapper.find('.counter span').text())
        .toBe('0');
});