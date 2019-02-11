import * as React from 'react';
import TodoList from './components/todolist.component'
import TodoPage from './pages/todo.page';
class App extends React.Component<any, any>{
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <div>
                    <TodoPage />
                </div>
        )
    }
}
export default App