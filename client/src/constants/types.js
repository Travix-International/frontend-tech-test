import PropTypes from 'prop-types';


const taskType = PropTypes.shape ({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  createdAt: PropTypes.number,
  lastUpdatedAt: PropTypes.number
});

const types = {
  _function: PropTypes.func.isRequired,
  _object: PropTypes.object.isRequired,
  _boolean: PropTypes.bool.isRequired,
  _number: PropTypes.number.isRequired,
  _string: PropTypes.string.isRequired,
  _task: taskType.isRequired,
  _taskArray: PropTypes.arrayOf (taskType)
}

export default types;
