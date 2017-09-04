import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './../../actions'

import Task  from './../../components/organisms/Task'

class Home extends React.Component {

	constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.onSave = this.onSave.bind(this)
        this.onDelete = this.onDelete.bind(this)
    }

	componentWillMount () {
		this.props.loadTasks()
	}
	handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }
	onSave(){
        this.props.createTask(this.state)
    }
	onDelete(task){
        this.props.deleteTask(task)
    }

	render() {
		return (
		  <Task 
		  	tasks={ this.props.Task.get('data')}  
		  	handleChange={ this.handleChange } 
		  	onSave = { this.onSave } 
		  	onDelete = { this.onDelete } 
		  	/>
		)
	}
}


function mapStateToProps(state) {
  return {
  	Task: state.Task
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export { Home }
export default connect(mapStateToProps, mapDispatchToProps)(Home)
