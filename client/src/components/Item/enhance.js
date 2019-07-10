import { connect } from "react-redux";
import { getTaskItem } from "store/reducers/tasks/selectors";

export default connect((state, props) => {
  return {
    task: getTaskItem(state.tasks, props.taskID),
  };
});
