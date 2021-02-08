import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, { mount, shallow } from 'enzyme';
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

it('updates state when increment is called without shift', () => {
    const wrapper = shallow(<App/>);
    const instance = wrapper.instance() as App;
    expect(instance.state.count).toBe(0);
    instance.increment(false);
    expect(instance.state.count).toBe(1);
});

it('updtates state when increment is called with shift', () => {
    const wrapper = shallow(<App/>);
    const instance = wrapper.instance() as App;
    expect(instance.state.count).toBe(0);
    instance.increment(true);
    expect(instance.state.count).toBe(10);
});

it('updates the count by 1 via the counter component', () => {
    const wrapper = mount(<App/>);
    wrapper.find('.counter').simulate('click', {shiftKey: false});
    expect(wrapper.find('.counter span').text()).toBe('1');
});

it('updates the count by 10 via the counter component', () => {
    const wrapper = mount(<App/>);
    wrapper.find('.counter').simulate('click', {shiftKey: true});
    expect(wrapper.find('.counter span').text()).toBe('10');
})