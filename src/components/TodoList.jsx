import * as React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {

    render() {
        const { loading, error } = this.props;
        if (loading) {
            return (
                <p>loading Tasks....</p>
            )
        }

        if (error) {
            return (
                <p>Error occured while fetching tasks</p>
            )
        }
        return (
            <div>
                <h1>ToDO List</h1>

            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        todo: state.todo.todo,
        error: state.todo.error,
        loading: state.todo.loading,
    };
};
const mapStateToDispatch = () => {
    return {};
};

export default connect(mapStateToProps, mapStateToDispatch)(TodoList);