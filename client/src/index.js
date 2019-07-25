import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'travix-ui-kit';

class App extends React.Component {
    onClick = () => {
    }

    render() {
        return (
            <div>
                Rohit
                <Button size='s' onClick={this.onClick}>Click Me 123</Button>
            </div>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));
