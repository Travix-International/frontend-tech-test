import React from 'react';

class TaskInput extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
        text: this.props.text || ''
      }
    }
    handleSubmit = e => {
        console.log(e.key);
        const text = e.target.value.trim();
        if (e.key === "Enter") {
            //this.props.onSave(text);
            this.save(text);
            // if (this.props.newTodo) {
            //     this.setState({ text: '' });
            // }
        }
    }

    save = (text) => {
        this.props.onSave(text);
    }
    
    handleChange = e => {
        this.setState({ text: e.target.value });
    }
    
    handleBlur = e => {
        console.log("ON BLUR called!", e.currentTarget);
        // if (!this.props.newTodo) {
        //     this.props.onSave(e.target.value);
        // }
        const text = e.target.value;
        this.save(text);
    }
    
    render() {
      return (
        <input
            type="text"
            value={this.state.text}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onKeyDown={this.handleSubmit} />
      )
    }
}

export default TaskInput