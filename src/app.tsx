import * as React from 'react';
import TodoList from './components/todolist.component'
import TodoPage from './pages/todo.page';
import Toast from './components/toast.component';
import { IAppState } from './interfaces/interface';
import { connect } from 'react-redux';
class App extends React.Component<any, any>{
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <div>
                    <TodoPage />
                    {this.props.ShowToast && <Toast/>}
                </div>
        )
    }
}
const mapStateToProps = (state: IAppState) => {
    return {
        ShowToast:state.Todo.ShowToast
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)