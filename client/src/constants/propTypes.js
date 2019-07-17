import PropTypes from 'prop-types';

const {
  shape, string, arrayOf, bool, number,
} = PropTypes;

export const TaskType = shape({
  id: number,
  title: string,
  completed: bool,
});

export const TaskListType = arrayOf(TaskType);
