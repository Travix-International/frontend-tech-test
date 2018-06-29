import * as React from 'react';
// import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import {ConnectedRouter, Switch} from 'react-router-dom';
import createStore, {history} from './store';
import AppComponent from './app/App.component';
import {start} from './app/actions';

export const store = createStore(window['__INITIAL_STATE__']);
const startAny: any = start; // TODO: hack, resolve this
store.dispatch(startAny());

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

class IndexComponent extends React.Component<any> {
    render() {
        console.log(history);
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/" component={AppComponent}/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default IndexComponent;