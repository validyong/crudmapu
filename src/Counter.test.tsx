import { shallow } from "enzyme"
import React from "react";
import Counter from "./Counter";

it('should render a counter', () => {
    const handler = jest.fn();
    const wrapper = shallow(<Counter count={0}
        onCounterIncrease={handler} />);
    expect(wrapper.find('.counter label').text())
        .toBe('Count');
});

it('should render a counter with custom label', () => {
    const handler = jest.fn();
    const wrapper = shallow(<Counter label={'Current'} count={0}
        onCounterIncrease={handler} />);
    expect(wrapper.find('.counter label').text())
        .toBe('Current');
});

it('should call the handler on click', () => {
    const handler = jest.fn();
    const wrapper = shallow(<Counter count={1} onCounterIncrease={handler} />);
    wrapper.find('.counter').simulate('click', { shiftKey: false });
    expect(handler).toBeCalledWith(false);
});

// it('should default start at zero', () => {
//     const wrapper = shallow(<Counter label={'Current'} start={10} />);
//     expect(wrapper.find('.counter span').text()).toBe('10');
// });

// it('should increment the count by one', () => {
//     const wrapper = shallow(<Counter />);
//     expect(wrapper.find('.counter span').text())
//         .toBe('0');
//     wrapper.find('.counter').simulate('click', { shiftKey: false });
//     expect(wrapper.find('.counter span').text())
//         .toBe('1');
// });

// it('should shift-click increment the count by ten', () => {
//     const wrapper = shallow(<Counter />);
//     expect(wrapper.find('.counter span').text())
//         .toBe('0');
//     wrapper.find('.counter').simulate('click', { shiftKey: true });
//     expect(wrapper.find('.counter span').text())
//         .toBe('10');
// });