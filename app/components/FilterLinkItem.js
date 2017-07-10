/**
 * Created by NarsFam on 08.07.2017.
 */
import React from 'react'
import PropTypes from 'prop-types'

const FilterLinkItem = ({ active, children, onClick }) => {
    if (active) {
        return <span>{children}</span>
    }

    return (
        <a
            href="#"
            onClick={e => {
                e.preventDefault();
                onClick();
            }}
        >
            {children}
        </a>
    )
};

FilterLinkItem.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default FilterLinkItem