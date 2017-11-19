import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { editTask, updateTask } from '../../actions/'
import Input from '../Input/Input'
import Textarea from '../Textarea/Textarea'

const EditTask = ({ id, title, description, editTask, updateTask }) => {
  let newTitle = ''
  let newDescription = ''

  function handleSubmit(event) {
    event.preventDefault()
    if (!newTitle.value.trim()) {
      return
    }

    updateTask({
      id,
      title: newTitle.value,
      description: newDescription.value,
    })

    newTitle.value = ''
    newDescription.value = ''
  }

  function handleTitle(event) {
    newTitle = event.currentTarget
  }

  function handleDescription(event) {
    newDescription = event.currentTarget
  }

  function handleCancel(event) {
    event.preventDefault()

    editTask({ payload: -1 })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input title="Title" type="text" handleChange={handleTitle} />
      <Textarea title="Description" handleChange={handleDescription} />
      <button onClick={handleCancel}>Cancel</button>
      <button>Save</button>
    </form>
  )
}


const mapStateToProps = state => (
  { tasks: state.todos.tasks }
)

const mapDispatchToProps = dispatch => (
  bindActionCreators({ editTask, updateTask }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(EditTask)
