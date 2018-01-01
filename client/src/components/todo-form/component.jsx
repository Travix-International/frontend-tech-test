import React from "react";
import PropTypes from "prop-types";
import Button from "../button";
import "./styles.less";

export default class TodoForm extends React.Component {
    static propTypes = {
        action: PropTypes.oneOf(['add', 'edit']),
        description: PropTypes.string,
        id: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]),
        onClose: PropTypes.func,
        onSubmit: PropTypes.func,
        title: PropTypes.string,
    };

    static defaultProps = {
        action: 'add',
        onClose: () => {},
        onSubmit: () => {},
        title: '',
        description: '',
        id: '',
    };

    componentWillUnmount() {
        this.props.onClose();
    }

    render() {
        return (
            <form className="add-todo" onSubmit={this.props.onSubmit}>
                <label className="add-todo__label" htmlFor="title">
                    Title
                </label>
                <div className="add-todo__input">
                    <input
                        defaultValue={this.props.title}
                        id="title"
                        name="title"
                        required
                        type="text"
                    />
                </div>
                <label className="add-todo__label" htmlFor="description">
                    Description
                </label>
                <div className="add-todo__input">
                    <textarea
                        defaultValue={this.props.description}
                        id="description"
                        name="description"
                        rows="3"
                        type="text"
                    />
                </div>
                <input defaultValue={this.props.id} name="id" type="hidden" />

                <Button className="add-todo__button" type="submit">
                    {this.props.action}
                </Button>
            </form>
        );
    }
}
