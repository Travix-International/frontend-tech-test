import {connect} from 'react-redux';
import App, {AppComponentDispatchProps, AppComponentStateProps} from './App.component';
import {AppReduxState, REDUCER_NAME__APP} from "./App.reducer";

const mapStateToProps = (state: any): AppComponentStateProps => {
    const currentState: AppReduxState = state[REDUCER_NAME__APP];
    return {
        loading: currentState.loading,
        error: currentState.error
    }
};

const mapDispatchToProps = {};
export default connect<AppComponentStateProps, AppComponentDispatchProps, any>(mapStateToProps, mapDispatchToProps)(App)
