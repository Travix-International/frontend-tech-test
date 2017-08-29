import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: '',
      description: ''
    }

    this.changeField = this.changeField.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const task = nextProps.task;

    if (task) {
      this.setState({
        title: task.title,
        description: task.description
      })
    }
  }

  changeField(fieldName, event) {
    this.setState({
      [fieldName]: event.target.value
    })
  }

  submit(e) {
    e.preventDefault();
    this.props.onEnter(this.state.title, this.state.description);

    this.setState({title: '', description: '' });
    this.props.history && this.props.history.push('/');
  }

  render() {
    const task = this.props.task;

    return (
      <div className="tasks__form">
        <div className="form-field">
          <input
            type="text"
            placeholder="Task title"
            className="form-field__input"
            value={ this.state.title}
            onChange={ this.changeField.bind(null, 'title') }
          />
        </div>
        
        <div className="form-field">
          <textarea
            placeholder="Task description"
            className="form-field__textarea"
            value={ this.state.description}
            onChange={ this.changeField.bind(null, 'description') }
          >
          </textarea>
        </div>
        
        <div className="form-field">
          <button
            type="button"
            className="form-field__btn"
            onClick={this.submit.bind(this)}
          >
            {task ? 'Update' : 'Create' }
          </button>
        </div>
      
      </div>
      
    )
  }
}

export default Form