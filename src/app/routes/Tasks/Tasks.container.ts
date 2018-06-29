import {connect} from 'react-redux';
import {
    fetch,

    createCancel,
    createStart,
    createSubmit,

    updateCancel,
    updateStart,
    updateSubmit,

    deleteCancel,
    deleteStart,
    deleteSubmit
} from './actions';
import CompanyLicences, {TasksComponentDispatchProps, TasksComponentStateProps} from './Tasks.component';
import {TasksReduxState, REDUCER_NAME__TASKS} from "./Tasks.reducer";

const mapStateToProps = (state: any, ownProps: any): TasksComponentStateProps => {
    const currentState: TasksReduxState = state[REDUCER_NAME__TASKS];
    return {
        loading: currentState.loading,
        tableData: currentState.tableData,
        error: currentState.error,
        confirmLoading: currentState.confirmLoading,
        pendingAdd: currentState.pendingAdd,
        pendingUpdateId: currentState.pendingUpdateId,
        pendingDeleteId: currentState.pendingDeleteId
    }
};

const mapDispatchToProps = {
    fetch,

    createCancel,
    createStart,
    createSubmit,

    updateCancel,
    updateStart,
    updateSubmit,

    deleteCancel,
    deleteStart,
    deleteSubmit
};

export default connect<
    TasksComponentStateProps,
    TasksComponentDispatchProps,
    any
>(mapStateToProps, mapDispatchToProps)(CompanyLicences)
