import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Input from './../ui/Input';


const handleStateChange = (prevProps, props) => {
  return props.location.pathname !== "/new"
      && props.data
      && (!prevProps.data
      || prevProps.data.title !== props.data.title
      || prevProps.data.description !== props.data.description
      || prevProps.data.done !==props.data.done);
}
class Detail extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    title: '',
    description: '',
    done: false,
  }

  componentDidMount() {
    const { match: { params: { id }}, getItem } = this.props;
    if (getItem && id) getItem(id);
  }

  componentDidUpdate(prevProps) {
    if (handleStateChange(prevProps, this.props)) {
      this.setState({ ...this.props.data }, () => this.props.handleChange(this.state));
    }
  }

  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState(state => ({...state, [name]: value}), () => this.props.handleChange(this.state));
  }

  render() {
    return (
      <Fragment>
        <Input type='text' name='title' value={this.state.title} onChange={this.handleChange} bgText="Title"/>
        <Input type='text' name='description' value={this.state.description} onChange={this.handleChange} area bgText="Description"/>
        <Input type='text' name='tags' value={this.state.tags} onChange={this.handleChange} area bgText="Please, add tags separating with commas"/>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  data: state.currentItem
});

export default withRouter(connect(mapStateToProps)(Detail));