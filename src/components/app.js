import React, {Component} from 'react';
import LazyLoad from 'react-lazyload';
import { connect } from 'react-redux';
import { getAllTasks, postNewTask } from '../reducers/tasks';
import Task from './task';
import SaveIcon from '@material-ui/icons/Save';


class App extends Component {
  constructor(props){
    super(props);


  }
  componentDidMount(){
    this.props.getAllTasks();
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light" >
          <h1 className="mx-auto">Todo List</h1>
        </nav>
        <div className="container">
          <div className="d-flex flex-column flex-md-row flex-md-row-reverse justify-content-md-center">
            <div className="input-tasks p-5">
              <div>
                <div>
                    <form autocomplete="off" onSubmit={evt => {
                     evt.preventDefault();
                     this.props.postNewTask(evt.target.taskName.value,evt.target.taskDescription.value);
                     evt.target.taskName.value = "";
                     evt.target.taskDescription.value = "";
                    }
                    }>
                    <div className="form-group">
                      <label for="taskTitle">New Task</label>
                      <input className="form-control" id="taskTitle" name="taskName" placeholder="Enter new task" required/>
                    </div>
                    <div className="form-group">
                      <label for="taskDescription">Add description</label>
                      <textarea className="form-control" id="taskDescription" name="taskDescription" placeholder="Enter description" rows="5"></textarea>
                    </div>
                    <button className="btn btn-primary" type="submit"><SaveIcon className="align-middle"/>Save task</button>
                    </form>
                </div>
            </div>
          </div>

              <div className="list-tasks p-5">
                <h3>You have {this.props.tasks.tasks.length} tasks</h3>
                <div id="accordion">
                  {
                      this.props.tasks && this.props.tasks.tasks.map((task) => {
                        return (
                          <LazyLoad offset={[-30, 0]}>
                            <Task id={task.id} Obj={task} Name={task.title} Description={task.description}/>
                          </LazyLoad>
                        )
                    })
                  }
                  </div>

              </div>
            </div>
        </div>

        </div>
    )
  }
}

const mapState = ({tasks}) => ({tasks});
const mapDispatch = {getAllTasks, postNewTask};
export default connect(mapState, mapDispatch)(App);
