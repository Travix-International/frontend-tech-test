import React from 'react';
import styles from './App.scss';

class App extends React.Component<{}> {
    render() {
        return (
            <div className="App">
                <h1 className={styles.title}>Hello World!!</h1>
            </div>
        );
    }
}

export default App;