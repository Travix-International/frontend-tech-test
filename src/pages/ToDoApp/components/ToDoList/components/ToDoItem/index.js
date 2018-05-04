import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as styles from './index.scss';
import { updateToDoItem } from '../../../../../../redux/actions/index';

class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            value: '',
        };
    }
    handleDoubleClick = () => {
        this.setState({
            editing: true,
            value: this.props.toDo.title,
        });
    };
    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };
    handleSave = e => {
        if (e.which === 13) {
            this.props.updateToDoItem(this.props.toDo.id, this.state.value);
            this.setState({ editing: false });
        }
    };

    render() {
        const { toDo, toggleToDo, deleteToDo } = this.props;
        return (
            <li className={`${styles.toDo} ${(toDo.completed ? styles.completed : null)}`}>
                {this.state.editing ?
                    <input
                        type="text"
                        ref={el => el && el.focus()}
                        className={styles.editing}
                        onChange={this.handleChange}
                        value={this.state.value}
                        onKeyDown={this.handleSave}
                        onBlur={() => this.setState({ editing: false })}
                    /> :
                    <Fragment>
                        <input
                            type="checkbox"
                            className={styles.toggle}
                            checked={toDo.completed}
                            onChange={toggleToDo}
                        />
                        <div
                            className={styles.title}
                            onDoubleClick={this.handleDoubleClick}
                        >
                            {toDo.title}
                        </div>
                        <button
                            className={styles.delete}
                            onClick={deleteToDo}
                        />
                    </Fragment>
                }
            </li>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateToDoItem: bindActionCreators(updateToDoItem, dispatch),
})

export default connect(null,mapDispatchToProps)(ToDoItem);
