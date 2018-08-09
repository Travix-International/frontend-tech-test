import React, { Component, Fragment } from 'react';
import Input from 'react-toolbox/lib/input';
import { withRouter } from 'react-router';
import styles from './Deatil.css';

class Detail extends Component {
  constructor(props) {
    super(props);
  }
  state = { name: '', description: '' }
  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };
  render() {
    console.log(this.props)
    return (
      <Fragment>
        <Input type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={16} />
        <Input type='text' label='Description' name='description' value={this.state.description} onChange={this.handleChange.bind(this, 'description')} multiline />
      </Fragment>
    )
  }
}

export default withRouter(Detail);