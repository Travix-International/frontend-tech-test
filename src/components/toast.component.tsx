import * as React from 'react';
import { IToast, IToastProps, IToastState, IAppState, ToastType } from '../interfaces/interface';
import todo_actions from '../actions/todo.actions';
import { connect } from 'react-redux';
import './../styles/toast.scss'
class Toast extends React.Component<IToastProps, IToastState>{
    constructor(props) {
        super(props);
        this.state = {
            className: 'toast'
        }
    }
    componentDidMount() {
        let { className } = this.state;
        if (this.props.ToastConfig.type === ToastType.SUCCESS) {
            className += ' toast-success'
        } else {
            className += ' toast-failure'
        }
        this.setState({ className }, () => {
            className += ' close-toast';
            this.setState({ className }, () => {
                window.setTimeout(() => {
                    this.props.dispatch(todo_actions.hideToast())
                }, 3000);
            })
        })

    }
    render() {
        return (
            <div className={this.state.className}>
                <div className='toast-msg'>{this.props.ToastConfig.message}</div>
            </div>
        )
    }
}
const mapStateToProps = (state: IAppState) => {
    return {
        ShowToast: state.Todo.ShowToast,
        ToastConfig: state.Todo.ToastConfig
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