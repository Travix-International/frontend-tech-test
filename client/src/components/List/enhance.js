import { connect } from "react-redux";
import { fetchList } from "store/reducers/tasks/actions";
import { getTasksList } from "store/reducers/tasks/selectors";

export default connect(
  state => {
    return {
      tasks: getTasksList(state.tasks),
    };
  },
  { fetchList }
);
