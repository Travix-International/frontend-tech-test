import React from 'react'
import './home.css'

import IncompleteTasksContainer from '../../containers/incomplete_tasks_container'
import CompleteTasksContainer from '../../containers/complete_tasks_container'
import AddEditTaskContainer from '../../containers/add_edit_task_container'

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import SvgIcon from '@material-ui/core/SvgIcon';

class HomeComponent extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.reverseOrder = this.reverseOrder.bind(this);

    this.state = {
      reverse: false
    }
  }

  componentDidMount(){
    this.props.getAllTasks()
  }

  handleClick(){
    this.props.selectOrCreateTask();
  }

  reverseOrder(){
    this.setState({
      reverse: this.state.reverse ? false : true
    })
  }

  render(){
    let mobile;
    if( navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
      ){
        mobile = true;
      }

    return(
      <section className = {this.state.reverse ? 'flex-reverse' : ''}>
        <Button variant = 'contained'
        color='secondary'
        onClick = {this.reverseOrder}
        className = {'reverse-button ' + (mobile ? '' : 'hide')}
        >
        {this.state.reverse ? 'Show Incomplete First' : 'Show Complete First'}</Button>

        <IncompleteTasksContainer />
        <CompleteTasksContainer />
        <AddEditTaskContainer />

        <div className = {this.props.selectOrCreate ? 'hide' : ''}>
          <Button variant='fab' color='secondary' aria-label='Add' onClick={this.handleClick} className='add-button'>
            <AddIcon />
          </Button>
        </div>

        <div className = {!this.props.selectOrCreate ? 'hide' : ''}>
          <Button variant='fab' color='primary' aria-label='Add' onClick={this.props.unselectTask} className='add-button'>
          <SvgIcon>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SvgIcon>
          </Button>
        </div>
      </section>
    )
  }
}

export default HomeComponent
