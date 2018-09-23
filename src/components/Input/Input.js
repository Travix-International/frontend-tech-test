import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Input.css';

class Input extends Component {
    static propTypes = {
        name: PropTypes.string,
        disabled: PropTypes.bool,
        className: PropTypes.string,
        classNameWrap: PropTypes.string,
        label: PropTypes.string,
        type: PropTypes.string,
        placeholder: PropTypes.string,
        onInputChange: PropTypes.func,
        onSubmit: PropTypes.func,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        children: PropTypes.any,
        refered: PropTypes.any,
        autocomplete: PropTypes.string,
    };

    handleChange = (e) => {
        this.props.onInputChange(e.target.value, this.props.name);
    }
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.props.onSubmit();
        }
    }
    render() {
        return (
            <div className={`form__input ${this.props.classNameWrap || ''}`}>
                {this.props.label
                    ? <label
                        className="form__input-label"
                        htmlFor={this.props.name}
                    >
                        {this.props.label}
                    </label>
                    : null
                }
                <input name={this.props.name}
                    className={`form__input-field ${this.props.className || ''}`}
                    ref={this.props.refered}
                    type={this.props.type}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    placeholder={this.props.placeholder || ''}
                    value = {this.props.value}
                    disabled={this.props.disabled}
                    autoComplete={this.props.autocomplete}
                />
                {this.props.children ? this.props.children : null}
            </div>
        );
    }
}

export default Input;
