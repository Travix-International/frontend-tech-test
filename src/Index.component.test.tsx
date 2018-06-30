import * as React from 'react';
import { shallow } from 'enzyme';
import Index from './Index.component';

it('renders without crashing', () => {
    shallow(<Index />);
});