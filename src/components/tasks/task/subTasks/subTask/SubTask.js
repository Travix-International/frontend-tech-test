import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'
import flow from 'lodash/flow'
import { TASK_STATUSES } from 'constants/taskStatuses'
import './subTask.scss'

const subTaskSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    }
  },
  endDrag(props) {
    props.endDragHandler({
      id: props.id,
      index: props.index
    })
  }
}

const subTaskTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index
    const hoverIndex = props.index

    if (dragIndex === hoverIndex) {
      return
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
    const clientOffset = monitor.getClientOffset()
    const hoverClientY = clientOffset.y - hoverBoundingRect.top

    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return
    }

    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return
    }

    props.moveSubTask(dragIndex, hoverIndex)

    monitor.getItem().index = hoverIndex
  }
}

class SubTask extends Component {
  render() {
    const { name, description, status, isDragging, connectDragSource, connectDropTarget, onClick } = this.props
    const style = {
      opacity: isDragging ? 0 : 1,
      textDecoration: status === TASK_STATUSES.DONE ? 'line-through' : 'none'
    }

    return connectDragSource(
      connectDropTarget(
        <div className="sub-task-container" style={style} title={description} onClick={onClick}>
          <div className="sub-task-container__name">
            {name}
          </div>
        </div>
      )
    )
  }
}

SubTask.propTypes = {
  connectDragSource: PropTypes.func,
  connectDropTarget: PropTypes.func,
  index: PropTypes.number.isRequired,
  isDragging: PropTypes.bool,
  id: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  moveSubTask: PropTypes.func.isRequired,
  endDragHandler: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
}

export default flow(
  DragSource('subTask', subTaskSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })),
  DropTarget('subTask', subTaskTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  }))
)(SubTask)
