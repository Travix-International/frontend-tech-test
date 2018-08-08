import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './button.css';

const Button = props => {
  const btn = props.href
    ? <Link to={props.href} className="link">{props.text}</Link>
    : <button onClick={props.onClick} {...props} className={`button ${props.className}`}>{props.text}</button>;
  return (
    <Fragment>
      {btn}
    </Fragment>
  );
}

export default Button;