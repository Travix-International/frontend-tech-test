import React from 'react';
import './App.css';
import TaskList from './components/task-list';
import AddTask from './components/add-task';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       tasks: [],
       title:'',
       description:''
    }
    this.fetchTasks = this.fetchTasks.bind(this);
    this.getJSONData = this.getJSONData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    //this.fetchTasks();
  }

  fetchTasks = (url = '/tasks') => {
    this.getJSONData(url).then((result)=>{
      this.setState(()=>({tasks:result.tasks}));
    });
  }

  getJSONData(url){
    return fetch(url).then((response)=>{
      if (!response.status === 200) {
        throw new Error('error fetching users');
      } else {
         return response.json();
      }
    })
  }

  postJSONData(url) {
    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res=>res.json())
      .then(res => {
        console.log(res);
        if (res.message.toLowerCase() === 'resource created') {
          this.fetchTasks();
        }
      });
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({[e.currentTarget.name]:e.currentTarget.value});
  }

  submit = (e) => {
    e.preventDefault();
    let url = `/task/create/${this.state.title}/${this.state.description}`;
    this.postJSONData(url);
    this.setState(()=>{
        return {
            title:'',
            description: ''
        };
    });
  }
  
  render() {
    return (
      <div className="row mt-5">
          <div className="col-md-4 offset-md-1">
              <h2>Add a new Task</h2>
              <AddTask />
          </div>
          <div className="col-md-4 offset-md-1">
              <h2>Tasks</h2>
              <TaskList />
          </div>
      </div>
    )
  }
}

export default App;
