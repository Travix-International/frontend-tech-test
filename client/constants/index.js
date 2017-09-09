import PropTypes from 'prop-types';

export const TODOS_ADD = 'TODOS_ADD';
export const TODOS_DELETE = 'TODOS_DELETE';
export const TODOS_UPDATE = 'TODOS_UPDATE';

export const SHOW_ALL = 'show_all'
export const SHOW_COMPLETED = 'show_completed'
export const SHOW_ACTIVE = 'show_active'

export const TODO_SCHEMA = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
});
