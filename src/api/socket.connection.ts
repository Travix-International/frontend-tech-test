import * as socketIOClient from 'socket.io-client'
import { BASE_URL } from './api_urls';

class SocketConnection {
    socket:any;
    constructor(){
        this.socket = socketIOClient(BASE_URL)      
    }
}
const socket_connection = new SocketConnection()
export default socket_connection;