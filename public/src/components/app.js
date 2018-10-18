import React from 'react';
import AddSection from './addSection';
import FilterSection from './filterSection';
import TodoList from './todoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/todo.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2 className="todo-heading">TO DO</h2>
                <h6 className="todo-author">- Suhas Patil -</h6>
                <div className="todo-app">
                    <AddSection />
                    <FilterSection />
                    <TodoList />
                </div>
            </div>
        );
    }
}

export default App;