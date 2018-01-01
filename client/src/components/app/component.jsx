import React from "react";
import PropTypes from "prop-types";
import Button from "../button";
import Preloader from "../loader";
import Popup from "../popup";
import TodoForm from "../todo-form";
import TodoList from "../todo-list";

import "./styles.less";
import addIcon from "./img/add-white.svg";

export default class App extends React.Component {
    static propTypes = {
        getTodos: PropTypes.func,
        handleAddClick: PropTypes.func,
        todoFormAction: PropTypes.string,
    };

    static defaultProps = {
        getTodos: () => {},
        handleAddClick: () => {},
        todoFormAction: "",
    };

    componentDidMount() {
        this.props.getTodos();
    }

    render() {
        return (
            <div className="app">
                <Preloader />
                <Popup id="error-popup" title="Error" />
                <header className="app__header">
                    <h1 className="app__title">Todo list</h1>
                    <Button
                        className="app__add-button"
                        icon={addIcon}
                        onClick={this.props.handleAddClick}
                    >
                        {"Add todo"}
                    </Button>
                </header>
                <div className="app__body">
                    <Popup
                        id="todo-popup"
                        title={`${this.props.todoFormAction} todo`}
                    >
                        <TodoForm />
                    </Popup>
                    <TodoList />
                </div>
            </div>
        );
    }
}
