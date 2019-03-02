import React from 'react';
import TasksList from './TasksList';
import styles from './app.module.scss';

const App = React.memo(() => {
    return (
      <div>
           <nav className={styles.nav}>
             <div className={styles.header}>o Do Lis</div>
           </nav>
           <TasksList/>
      </div>
    );
});

export default App;

