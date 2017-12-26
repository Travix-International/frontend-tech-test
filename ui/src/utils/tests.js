import { shallow, mount } from 'enzyme';

export const mountWithStore = (component, store) => {
  const context = {
    store
  };
  return mount(component, { context });
};

export const shallowWithStore = (component, store) => {
  const context = {
    store
  };
  return shallow(component, { context });
};
