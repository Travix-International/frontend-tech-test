import React from 'react';
import './App.css';
import TaskList from './components/task-list';
import AddTask from './components/add-task';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faSort, faTimes, faSave, faEdit } from '@fortawesome/free-solid-svg-icons';
import InfoMessage from './components/info-message';
import SortFilter from './components/sort-filter';
import Cockpit from './components/cockpit';

library.add(faSearch, faSort, faTimes, faSave, faEdit);

const sortOptions = ['Sort By', 'Title', 'Description'];

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       tasks: [],
       title:'',
       description:'',
       message:""
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
      <div className="container appContainer">
        {/* <div className="row mt-2 alertContainer">
          <InfoMessage/>
        </div> */}
        <div className="row">
            <Cockpit title={'Task Manager'}/>
        </div>
        <div className="row mt-2 mb-2 addTaskContainer">
            <div className="col-md-12">
                <AddTask />
            </div>
        </div>
        <div className="row mt-2 mb-2 sortFilterContainer">
          <div className="col-md-12">
              <SortFilter sortOptions={sortOptions}/>
          </div>
        </div>
        <div className="row mt-2 mb-2 taskListContainer">
            <div className="col-md-12">
                <TaskList />
            </div>
        </div>
      </div>
    )
  }
}

export default App;
