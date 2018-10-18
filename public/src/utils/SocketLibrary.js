export default class Socket {
    constructor(url = '', options = {
        onOpen: function () {
            console.log('socket open')
        },
        onClose: function () {
            console.log('socket closed');
        },
        onError: function (e) {
            console.log('socket error', e);
        }
    }) {
        var WebSocket = null;
        WebSocket = WebSocket || window.WebSocket || window.MozWebSocket;
        this.websocket = new WebSocket(url);

        this.websocket.onopen = function () {
            options.onOpen();
        };
        this.websocket.onclose = options.onClose || function () {
            console.log('socket closed');
        };
        this.websocket.onerror = options.onError || function (e) {
            console.log('socket error', e);
        }
        this.websocket.onmessage = function (evt) {
            if (options.onMessage) {
                options.onMessage(evt.data);
            } else {
                console.log("ws message", evt.data);
            }
        }
    }

    sendMessage(message) {
        if (this.websocket.readyState == 1) {
            this.websocket.send(JSON.stringify(message) + "\r");
        }
    }

    close() {
        this.websocket.close();
    }
}