import React, { Component } from 'react';
import ToDo from './toDo';
import axios from 'axios';
import _ from 'lodash';

class ToDoList extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
            tasks: []
        };
    }

    componentDidMount() {
        console.log("Loaded component");
        axios.get(`http://localhost:9001/tasks`)
        .then(res => {
           this.setState({
              tasks:  _.values(res.data.tasks)
           });
        });
    }

    render(){

        return(
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tasks.map((task) => {
                                return <ToDo task={task} key={task.id}/>
                            })
                        }
                    </tbody>
                </table>
               
            </div>
        );
    }
}

export default ToDoList;