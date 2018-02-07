import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button';
import * as ListActions from './../actions';

class List extends React.Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(ListActions.getTodoTaskList());
  }

  render() {
    const { tasks } = this.props;
    const style = {
      margin: 12,
    }

    let legend = tasks.list.length ? null :
    (
      <div>
        <p>Why do not you try to create your first task ...</p>
        <Link to="/add">
          <Button raised color="primary" style={style}>Create First Task</Button>
        </Link>
      </div>
    );

    return (
      <section className="list">
        <div className="list-task">{ tasks.list }</div>
        <div className="list-legend">{ legend }</div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.todos,
  };
};

export default connect(mapStateToProps)(List);
