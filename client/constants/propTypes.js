import PropTypes from 'prop-types';

export const TODO_PROPTYPES = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
});

export const PAGINATION_PROPTYPES = PropTypes.shape({
  page: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
});
