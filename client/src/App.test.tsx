import React from 'react';
import App from './App';

describe('test', () => {
    it('should pass', () => {
        expect(<App />).toMatchSnapshot();
    })
});