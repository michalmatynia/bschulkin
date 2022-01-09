import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';

import { findByTestAttr } from './test/testUtils'
import Congrats from './Congrats'


const setup = (props = {}) => {

    return shallow(<Congrats  {...props} />)
}

test('renders without error', async () => {
    const wrapper = setup();
    const component = await findByTestAttr(wrapper, 'component-congrats')
    expect(component.length).toBe(1)

})
test('renders no text when success prop is false', async () => {
    const wrapper = setup({ success: false });
    const component = await findByTestAttr(wrapper, 'component-congrats')
    expect(component.text()).toBe('')
})

test('renders non-empty congrats message', async () => {
    const wrapper = setup({ success: true });
    const message = await findByTestAttr(wrapper, 'component-congrats')    
    expect(message.text().length).not.toBe(0)
})