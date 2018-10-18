import SocketClass from '../utils/SocketLibrary';
import store from '../store';
let socket;
const ActionCreator = {
    sendReadyMessage: function(connectionId) {
        socket.sendMessage({
            connectionId,
            type: "ready"
        });
    },

    sendAddMessage(data) {
        this.sendSocketMessage('add', data);
    },

    sendUpdateMessage(data) {
        this.sendSocketMessage('update', data);
    },

    sendCompleteMessage(data) {
        this.sendSocketMessage('complete', data);
    },

    sendDeleteMessage(data) {
        this.sendSocketMessage('delete', data)
    },

    sendSocketMessage(msgType, data) {
        var connectionId = store.getState().connectionId
        socket.sendMessage({
            connectionId,
            type: msgType,
            value: data
        });
    },

    setVisibilityFilter(filter) {
        return {
            type: 'visibilityFilter',
            filter: filter
        }
    },

    receiveEvent: function(data) {
        switch (data.type) {
            case 'connectionSuccess':
                this.sendReadyMessage(data.connectionId);
                break;
            case 'addfail':
            case 'updatefail':
            case 'deletefail':
                console.log("Operation Failed ::: ", data.value.error);
                break;
            default:
                store.dispatch(data);
                break;
        }
    }
}


function initSocketConnection(onOpenCallBack = () => {}) {
    socket = new SocketClass('ws://localhost:9001', {
        onOpen: onOpenCallBack,
        onMessage: (data) => {
            try {
                ActionCreator.receiveEvent(JSON.parse(data));
            } catch (ex) {
                console.log("ws send message error", ex);
            }
        }
    });
}

export {
    ActionCreator as default,
    initSocketConnection
}