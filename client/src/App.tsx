import React from 'react';
import TodoDashboardContainer from '@containers/TodoDashboardContainer';
import styles from './App.scss';

class App extends React.Component<{}> {
    render() {
        return (
            <div className="App">
                <h1 className={styles.title}>Todo</h1>
                <TodoDashboardContainer />
            </div>
        );
    }
}

export default App;