import * as React from 'react';
import TodoItem from './todoitem.component';
import { connect } from 'react-redux';

class TodoList extends React.Component<any,any>{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                {this.state.todoList.map((todoItem)=>{
                    return <TodoItem/>
                })}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
       TodoList:state.Todo.TodoList
    };
};
  
  const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList)