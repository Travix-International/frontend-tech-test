//Third Party
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import PropTypes from 'prop-types'

// main app
import AppContainer from './components/App';

//Redux
import store from './redux/Store'

//GLobal Styles
import 'react-virtualized/styles.css';

class App extends React.Component {

    render () {
        return (
          <Provider store={this.props.store}>
            <AppContainer/>
          </Provider>
        );
    }

}

App.propTypes = {
    store: PropTypes.object
}

ReactDOM.render(<App store={store}/>, document.getElementById('app'));

const steps = [
  {
    element: '#navbar',
    intro: 'test 1',
    position: 'right',
    tooltipClass: 'myTooltipClass',
    highlightClass: 'myHighlightClass',
  }
];