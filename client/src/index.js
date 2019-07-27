import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/index.js';
import Root from './apps/Root';

class App extends React.Component {
    onClick = () => {
    }

    render() {
        return (
            <Provider store={store}>
                <Root/>
            </Provider>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));
