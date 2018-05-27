import * as Constants from '../constants';


const toastMessage = (state = {}, action) => {
    const { type, toastMessage } = action;
    switch (type) {
      case Constants.SHOW_TOAST:
        return {
          //tasks:state.tasks,
            isRead:false,
            message: toastMessage.message,
            messageType: toastMessage.type
        };
      case Constants.MARK_MESSAGE_AS_READ:
        return {
            isRead:true
        };
    default:
        return state;
    }
};

export default toastMessage;
