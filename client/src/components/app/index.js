import { connect } from 'react-redux';
import { fetchTodosRequest } from '../../actions/todos';
import { showPopup } from '../../actions/popup';
import App from './component';

const mapStateToProps = ({ todoForm }) => ({ todoFormAction: todoForm.action });

const mapDispatchToProps = (dispatch) => {
    return {
        getTodos: () => {
            dispatch(fetchTodosRequest());
        },
        handleAddClick: () => {
            dispatch(showPopup({ id: 'todo-popup' }));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

