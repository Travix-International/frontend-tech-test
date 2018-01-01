import { connect } from "react-redux";
import {
    addTodoRequest,
    editTodoRequest,
    editTodoEnd,
} from "../../actions/todos";
import TodoForm from "./component";

const mapStateToProps = ({ todoForm }) => ({ ...todoForm });

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitAdd: (event) => {
            event.preventDefault();

            const data = new FormData(event.target);

            dispatch(
                addTodoRequest({
                    title: data.get("title"),
                    description: data.get("description"),
                })
            );
        },
        onSubmitEdit: (event) => {
            event.preventDefault();

            const data = new FormData(event.target);

            dispatch(
                editTodoRequest({
                    id: data.get("id"),
                    title: data.get("title"),
                    description: data.get("description"),
                })
            );
        },
        onCloseEdit: () => {
            dispatch(editTodoEnd());
        },
    };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        ...ownProps,
        ...stateProps,
        onSubmit:
            stateProps.action === "edit"
                ? dispatchProps.onSubmitEdit
                : dispatchProps.onSubmitAdd,
        onClose:
            stateProps.action === "edit"
                ? dispatchProps.onCloseEdit
                : () => {},
    };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
    TodoForm
);
