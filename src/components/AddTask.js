import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import * as AddActions from './../actions';

class AddTask extends React.Component {
  componentDidMount() {
    const {dispatch} = this.props;
  }

  render() {
    const {tasks} = this.props;
    return (
      <div>{ tasks }</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps)(AddTask);
