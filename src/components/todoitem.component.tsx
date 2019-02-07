import * as React from 'react';
import { connect } from 'react-redux';
class TodoItem extends React.Component<any,any>{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div>{this.props.todoItem.name}</div>
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
  )(TodoItem)