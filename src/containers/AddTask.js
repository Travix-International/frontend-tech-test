import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { createTask } from '../actions/'
import Input from '../components/Input/Input'
import Textarea from '../components/Textarea/Textarea'


const AddTask = ({ createTask }) => {
  let title = ''
  let description = ''

  function handleSubmit(event) {
    event.preventDefault()
    if (!title.value.trim()) {
      return
    }

    createTask({
      title: title.value,
      description: description.value,
    })

    title.value = ''
    description.value = ''
  }

  function handleTitle(event) {
    title = event.currentTarget
  }

  function handleDescription(event) {
    description = event.currentTarget
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input title="Task" type="text" handleChange={handleTitle} />
      <Textarea title="Description" handleChange={handleDescription} />
      <div className="button-wrap">
        <button>Save</button>
      </div>
    </form>
  )
}


const mapStateToProps = state => (
  { tasks: state.todos.tasks }
)

const mapDispatchToProps = dispatch => (
  bindActionCreators({ createTask }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(AddTask)
