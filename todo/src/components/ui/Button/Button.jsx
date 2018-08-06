import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Button = props => {
  const btn = props.href
    ? <Link to={props.href}>{props.text}</Link>
    : <button onClick={props.onClick} {...props}>{props.text}</button>;
  return (
    <Fragment>
      {btn}
    </Fragment>
  );
}

export default Button;