import * as React from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import createStore from './store';
import AppComponent from './app/App.component';
import {start} from './app/actions';

export const store = createStore(window['__INITIAL_STATE__']);
const startAny: any = start; // TODO: hack, resolve this
store.dispatch(startAny());

// Import css for libraries here
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';

class IndexComponent extends React.Component<any> {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Route path="/" component={AppComponent}/>
                </Router>
            </Provider>
        )
    }
}

export default IndexComponent;