import * as React from 'react';
import { IToast, IToastProps, IToastState, IAppState, ToastType } from '../interfaces/interface';
import todo_actions from '../actions/todo.actions';
import { connect } from 'react-redux';
import './../styles/toast.scss'
 class Toast extends React.Component<IToastProps, IToastState>{
    componentDidMount(){
        // window.setTimeout(()=>{
        //     this.props.dispatch(todo_actions.hideToast())
        // },3000);
        
    }
    render() {
        return (
            <div className={this.props.ShowToast && this.props.type ===ToastType.SUCCESS?'toast toast-success':'toast toast-failure'}>
                <div className='toast-msg'>{this.props.ToastConfig.message}</div>
            </div>
        )
    }
}
const mapStateToProps = (state: IAppState) => {
    return {
        ShowToast:state.Todo.ShowToast,
        ToastConfig:state.Todo.ToastConfig
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
)(Toast)