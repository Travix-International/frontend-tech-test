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
        let {
            classNameWrap,
            label,
            name,
            className,
            refered,
            type,
            placeholder,
            value,
            disabled,
            children,
            autocomplete,
        } = this.props;
        return (
            <div className={`form__input ${classNameWrap || ''}`}>
                {label
                    ? <label
                        className="form__input-label"
                        htmlFor={name}
                    >
                        {label}
                    </label>
                    : null
                }
                <input name={name}
                    className={`form__input-field ${className || ''}`}
                    ref={refered}
                    type={type}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    placeholder={placeholder || ''}
                    value = {value}
                    disabled={disabled}
                    autoComplete={autocomplete}
                />
                {children ? children : null}
            </div>
        );
    }
}

export default Input;
