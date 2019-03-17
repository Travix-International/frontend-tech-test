import { connect } from "react-redux";
import { editToDoItem } from "./../dispatchers/dispatcher";
import { bindActionCreators } from "redux";
import ToDoItem from "./ToDoItem";

const mapDispatchToProps = dispatch => ({
  editToDoItem: bindActionCreators(editToDoItem, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(ToDoItem);
