import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import * as Actions from './actions';
import * as Constants from './constants';


class App extends Component {

  componentWillReceiveProps(nextProps) {
    this.showToast(nextProps.toastMessage);
  }

  showToast(toastMessage){
    if(typeof toastMessage !== "undefined"){
      if(!toastMessage.isRead && typeof toastMessage.messageType !== "undefined"){
        let type = toast.TYPE.INFO;
        switch (toastMessage.messageType) {
          case Constants.SUCCESS_TOAST:
            type = toast.TYPE.SUCCESS
            break;
          case Constants.ERROR_TOAST:
          console.log(toastMessage);
            type = toast.TYPE.ERROR;
            break;
          default:
            type = toast.TYPE.INFO
        }
        const options = {
          autoClose: 6000,
          type: type,
          hideProgressBar: false,
          position: toast.POSITION.BOTTOM_RIGHT,
        };
        toast(toastMessage.message, options);
        this.props.markMessageAsRead();
      }
    }
  }

  render() {
    return (
      <div>
        <ToastContainer/>
        <TodoList/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        markMessageAsRead: () => {
          dispatch(Actions.markMessageAsRead());
        }
    };
};

const mapStateToProps = ( state ) => {
  return {
    toastMessage: state.toastMessage
  }
};

export default connect(mapStateToProps ,mapDispatchToProps)(App);
