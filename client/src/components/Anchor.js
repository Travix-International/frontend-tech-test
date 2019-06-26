import React from 'react';
import { Link } from 'react-router-dom';

const Anchor = props => {
    const {className, to, text} = props;
    return (
        <Link className={className} to={to}>{text}</Link>
    );
};

export default Anchor;