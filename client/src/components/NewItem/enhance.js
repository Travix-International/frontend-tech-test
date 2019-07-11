import { connect } from "react-redux";
import { create } from "store/reducers/tasks/actions";

export default connect(
  null,
  { create }
);
