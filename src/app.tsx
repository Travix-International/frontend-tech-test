import * as React from 'react';
import TodoList from './components/todolist.component'
class App extends React.Component<any,any>{
    constructor(props){
        super(props);
    }
    render(){
        return <TodoList/>
    }
}
export default App