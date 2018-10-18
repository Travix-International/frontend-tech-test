import React from 'react';
import AddSection from './addSection';
import FilterSection from './filterSection';
import TodoList from './todoList';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <AddSection />
                <FilterSection />
                <TodoList />
            </div>
        );
    }
}

export default App;