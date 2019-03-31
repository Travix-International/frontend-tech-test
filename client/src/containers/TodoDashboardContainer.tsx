import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { ApplicationState } from '@store/index';
import { TodoAction } from '@store/todo/types';
import * as TodoActions from '@store/todo/actions';
import TodoDashboard from '@components/TodoDashboard';

const mapStateToProps = (state: ApplicationState) => ({
    ...state.todo,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<ApplicationState, {}, TodoAction>) => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoDashboard)