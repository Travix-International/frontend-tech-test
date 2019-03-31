import React from "react";
import {connect} from "react-redux";
import * as todoActions  from "../redux/actions/todoActions";
import {PropTypes} from "prop-types";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";

class TodoForm extends React.Component{
    componentWillReceiveProps(props){
        if(props.todoItem){
            this.setState({ todoItem: props.todoItem })

        }
    }
    constructor(props){
      super(props);
      this.state ={
        todoItem : {
            id : "",
            title : "",
            description : ""
        }
      }
    }

    handleChange = event => {
        const todoItem = {...this.state.todoItem ,  title :  event.target.value };
        this.setState({todoItem : todoItem});
    }

    handleDescriptionChange = event => {
        const todoItem = {...this.state.todoItem ,  description :  event.target.value };
        this.setState({todoItem : todoItem});
    }

    saveTodoItem = event => {
        event.preventDefault();
        console.log(this.state.todoItem)
        if(!this.props.todoItem.id)
        {
            this.props.actions.createTodo(this.state.todoItem)
            toast.success("Added ("+ this.state.todoItem.title + ") in the the list")
        }
        else{
            this.props.actions.updateTodo(this.state.todoItem)
            toast.success("Updated item in the list successfully")
            console.log(this.state.todoItem)
        }
        
        this.props.updateTodoItemState(event, { id: "", title :"", description: "" });
    }
    
    render()
    {
        return (
                <div className="card">
                <h5 className="card-header">Tell us what needs to get done.</h5>
                <div className="card-body">
                <form onSubmit = {this.saveTodoItem}>
                        <div className="form-group">
                                <label htmlFor="title">Title</label>
                                {this.props.todoItemId}
                                <input type="text" className="form-control" id="title" value={this.state.todoItem.title} onChange={this.handleChange} placeholder="Title" required/>
                        </div>
                        <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea className="form-control" rows="3" id="description" value={this.state.todoItem.description} onChange={this.handleDescriptionChange}></textarea>                
                        </div>
                    <button type="submit" className="btn btn-dark">Save Item</button>
                </form>
                </div>
                </div>

        );
    }
   
}
TodoForm.propTypes  = {
    todoItems : PropTypes.array.isRequired,
    todoItem : PropTypes.object.isRequired,
    actions : PropTypes.object.isRequired,
    updateTodoItemState :PropTypes.func.isRequired
};

function mapStateToProps(state)
{
    return { todoItems : state.todoItems };
}
function mapDispatchToProps(dispatch){
    return {
        actions :  bindActionCreators(todoActions , dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoForm);