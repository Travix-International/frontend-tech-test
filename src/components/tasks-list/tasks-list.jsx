import { compose, branch, renderComponent } from 'recompose';

import EmptyTasksList from '../empty-tasks-list/empty-tasks-list';
import BaseTasksList from './base-tasks-list';
import Loading from '../loading/loading';

import withModel from '../../utils/hoc.util';
import { load } from '../../utils/tasksApi.util';

const model = async () => load().tasks;

const TasksList = branch(
  ({ tasks }) => !tasks || (tasks && tasks.length === 0),
  renderComponent(EmptyTasksList),
)(BaseTasksList);

export const enhance = compose(
  withModel(model, []),
  branch(
    ({ data }) => !data,
    renderComponent(Loading),
  ),
);

export default enhance(TasksList);

