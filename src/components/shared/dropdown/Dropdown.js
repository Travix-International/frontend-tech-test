import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown as DropdownComponent, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

export default function Dropdown({ options, value, isOpen, toggle, setValue, direction }) {
  return (
    <DropdownComponent id="editStatus" direction={direction} isOpen={isOpen} toggle={toggle}>
      <DropdownToggle caret>
        {value.label}
      </DropdownToggle>
      <DropdownMenu>
        {options.map(x => (
          <DropdownItem
            key={x.value}
            disabled={x.value === value.value}
            onClick={() => setValue(x)}
          >
            {x.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownComponent>
  )
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired,
  value: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  direction: PropTypes.string
}

Dropdown.defaultProps = {
  direction: 'down'
}
