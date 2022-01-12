import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr } from './test/testUtils';
import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * Setup function for App Component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<App/>)
}
test('renders without error', async () => {

const wrapper = setup()
const appComponent = await findByTestAttr(wrapper, 'component-app')
expect(appComponent).toHaveLength(1)
});
