import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Input from './../ui/Input';

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
    if (this.props.location.pathname !== "/new"
      && this.props.data
      && (!prevProps.data
      || prevProps.data.title !== this.props.data.title
      || prevProps.data.description !== this.props.data.description
      || prevProps.data.done !== this.props.data.done)) {
        this.setState({ ...this.props.data }, () => this.props.handleChange(this.state));
      }
  }
  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState({...this.state, [name]: value}, () => this.props.handleChange(this.state));
  }
  render() {
    return (
      <Fragment>
        <Input type='text' name='title' value={this.state.title} change={this.handleChange} bgText="Title"/>
        <Input type='text' name='description' value={this.state.description} change={this.handleChange} area bgText="Description"/>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  data: state.currentItem
});

const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Detail));