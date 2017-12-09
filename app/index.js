//Third Party
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

// main app
import AppContainer from './components/App';

//Redux
import store from './redux/Store'

//GLobal Styles
import 'react-virtualized/styles.css';

class App extends React.Component {

    render () {
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        );
    }

}

ReactDOM.render(<App/>, document.getElementById('app'));

const steps = [
  {
    element: '#navbar',
    intro: 'test 1',
    position: 'right',
    tooltipClass: 'myTooltipClass',
    highlightClass: 'myHighlightClass',
  }
];