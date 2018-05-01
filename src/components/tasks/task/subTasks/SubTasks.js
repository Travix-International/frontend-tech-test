import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import update from 'immutability-helper'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { updateSubTask, deleteSubTask } from 'actions'
import SubTask from './subTask/SubTask'
import UpdateTaskModal from '../updateTaskModal/UpdateTaskModal'

class SubTasks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subTasks: props.subTasks,
      displayUpdateTaskModal: false,
      selectedSubTask: null
    }
  }

  componentWillReceiveProps(nextProps) {
    const { subTasks } = this.props
    const { subTasks: nextSubTasks } = nextProps
    if (nextSubTasks !== subTasks) {
      this.setState({
        subTasks: nextSubTasks
      })
    }
  }

  onSubTaskClick = (subTask) => {
    this.setSelectedSubTask(subTask)
    this.toggleDisplayUpdateTaskModal()
  }

  setSelectedSubTask = (selectedSubTask) => {
    this.setState({ selectedSubTask })
  }

  toggleDisplayUpdateTaskModal = () => {
    this.setState(prevState => ({ displayUpdateTaskModal: !prevState.displayUpdateTaskModal }))
  }

  moveSubTask = (dragIndex, hoverIndex) => {
    const { subTasks } = this.state
    const dragSubTask = subTasks[dragIndex]

    this.setState(
      update(this.state, {
        subTasks: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragSubTask]]
        }
      })
    )
  }

  render() {
    const { subTasks, displayUpdateTaskModal, selectedSubTask } = this.state
    const { endDragHandler } = this.props
    if (subTasks.length === 0) {
      return null
    }
    return (
      <div className="task-container__sub-tasks">
        {subTasks.map((x, i) => (<SubTask
          key={x.id}
          id={x.id}
          index={i}
          name={x.name}
          description={x.description}
          status={x.status}
          moveSubTask={this.moveSubTask}
          endDragHandler={endDragHandler}
          onClick={() => this.onSubTaskClick(x)}
        />))}
        {displayUpdateTaskModal && <UpdateTaskModal
          title="Update Subtask"
          task={selectedSubTask}
          toggle={this.toggleDisplayUpdateTaskModal}
          updateTask={this.props.updateSubTask}
          deleteTask={this.props.deleteSubTask}
        />}
      </div>
    )
  }
}

SubTasks.propTypes = {
  subTasks: PropTypes.array.isRequired,
  endDragHandler: PropTypes.func.isRequired,
  updateSubTask: PropTypes.func.isRequired,
  deleteSubTask: PropTypes.func.isRequired
}

export default DragDropContext(HTML5Backend)(connect(null, {
  updateSubTask,
  deleteSubTask
})(SubTasks))
