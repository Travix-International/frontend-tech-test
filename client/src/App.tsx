import React from 'react';
import TodoDashboardContainer from '@containers/TodoDashboardContainer';
import styles from './App.scss';
import QueryContainer from '@components/QueryContainer';

class App extends React.Component<{}> {
    render() {
        return (
            <div className={styles.app}>
                <QueryContainer>
                    <TodoDashboardContainer />
                </QueryContainer>
                <div className={styles.bgText}><p>TODO</p></div>
            </div>
        );
    }
}

export default App;