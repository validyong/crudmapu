import { shallow } from "enzyme";
import Heading from "./Heading";

const wrapper = shallow(<Heading recipient={'World'}/>);

it('renders the default heading', () => {
    const wrapper = shallow(<Heading/>);
    expect(wrapper.find('h1').text()).toBe('Hello React');
})