import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import * as todoActions  from "../../redux/actions/todoActions";
import {PropTypes} from "prop-types";
import { bindActionCreators } from "redux";
import TodoForm from "../TodoForm";
import { toast } from "react-toastify";
import ItemForm from "./ItemForm";

class ManageItems extends React.Component{ 

    constructor(props){
      super(props);
      this.updateTodoItemState = this.updateTodoItemState.bind(this);
 
      this.state = {
      todoItem : {
          id : "",
          title : "",
          description : ""
      }
    }
  }

  componentDidMount(){
    if(this.props.todoItems.length === 0){
      this.props.actions.loadTodoItems().catch(error =>
      {
          toast.error("Loading Todo Items Failed" + error);
      })
    }
  }
  updateTodoItemState(event,item){
    event.preventDefault();
    this.setState({todoItem : item});
    console.log(item);
  }

  deleteItem(id,e){
    toast.error("Deleted the Item SuccessFully!");
    this.props.actions.deleteTodoItem(id).catch(error =>
      {
          toast.error("Deletion failed" + error);
      })
  }

  editItem(item,e){
    this.setState({todoItem : item});
    //scrolling to the form in real world case would be some animation but for I`m using plain javascript
    window.scrollTo(0, 0);

    toast.warn("Editing "+ item.title);
  }

  render(){
      return(
      <div className="container">
        {/* <h3 className="display-4">My Todo List</h3> */}
        <TodoForm todoItem ={this.state.todoItem} updateTodoItemState={this.updateTodoItemState}/>
        {/* <ItemForm todoItem={this.state.todoItem} onSave={this.saveTodoItem} handleChange={this.handleChange} handleDescriptionChange={this.handleDescriptionChange} /> */}
        <hr/>
        <div className="card">
            <h5 className="card-header">My Active Items - ({this.props.todoItems.length} active items in the List)</h5>
            <div className="card-body">
          {
            this.props.todoItems.map(item => (
              <div className="media"  key={item.id}>
                <div className="media-body">
                  <h5 className="mt-0">{item.title}</h5>
                  <p>{item.description}</p>
                  <div className="btn-group" role="group" aria-label="Actions">
                  <button className="btn btn-info" onClick={(e) => this.editItem(item, e)}>Edit</button>  
                  <button className="btn btn-danger" onClick={(e) => this.deleteItem(item.id, e)}>Delete</button>
                  </div>
                  <hr/>
                </div>
              </div>
             ))
          }
      </div>
      </div>
      </div>
  )
}
}

ManageItems.propTypes  = {
  todoItems : PropTypes.array.isRequired,
  actions : PropTypes.object.isRequired
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
export default connect(mapStateToProps,mapDispatchToProps)(ManageItems);

