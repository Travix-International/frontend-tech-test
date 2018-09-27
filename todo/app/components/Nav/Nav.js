import React from 'react';
import { connect } from 'react-redux'

/**
 * @author Syed Aibad Hashmi
 * Housing component for navigation
 */
export class Nav extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            search: ''
        }

        this.handleOnBlur = this.handleOnBlur.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange (event) {
        this.setState({
            search: event.target.value
        });
    }

    handleOnBlur (event) {
        this.props.findTodo(this.state.search);
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="input-group search-container">
                        <i className="material-icons">search</i>
                        <input type="text" className="form-control" value={this.state.search} onChange={this.handleOnChange.bind(this)} onBlur={this.handleOnBlur.bind(this)} placeholder="Search" aria-describedby="search-addon"></input>
                    </div>
                    <button onClick={this.props.addTodoModal} type="button" className="btn btn-default add-todo-button">
                        <i className="material-icons">add</i>
                    </button>
                </div>
            </nav>
        );
    }

}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps)(Nav);
