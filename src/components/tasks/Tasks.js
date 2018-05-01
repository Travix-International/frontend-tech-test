import React from 'react'
import PropTypes from 'prop-types'
import Spinner from 'components/shared/spinner'
import Masonry from 'react-masonry-component'
import Task from './task/Task'

const masonryOptions = {
  transitionDuration: 0,
  horizontalOrder: true
}

function Tasks({ tasks, filter, checkIsPossibleToAddSubTask }) {
  if (!tasks) {
    return <Spinner />
  }

  return (
    <Masonry
      className={'tasks-list'}
      elementType={'div'}
      options={masonryOptions}
    >
      {filter(tasks).map((x, i) => (<Task
        key={x.id}
        task={x}
        isPossibleToAddSubTask={checkIsPossibleToAddSubTask(x)}
      />))}
    </Masonry>
  )
}

Tasks.propTypes = {
  tasks: PropTypes.array,
  filter: PropTypes.func,
  checkIsPossibleToAddSubTask: PropTypes.func.isRequired
}

Tasks.defaultProps = {
  filter: items => items
}

export default Tasks
