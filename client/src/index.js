import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Root from './apps/Root.jsx';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Root/>
            </Provider>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));
