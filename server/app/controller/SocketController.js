// https://www.npmjs.com/package/web-socket-router
import WebSocketRouter from 'web-socket-router'

class SocketController {

	constructor (connection) {
		this.router = new WebSocketRouter(connection, this);
	}

	notifyDeleted (TODO) {
		new this.router
			.message()
			.route('/task')
			.data(TODO)
			.action(this.router.action.DELETE)
			.send();
	}

	notifyCreated (TODO) {
		new this.router
			.message()
			.route('/task')
			.data(TODO)
			.action(this.router.action.CREATE)
			.send();
	}

	notifyUpdated (TODO) {
		new this.router
			.message()
			.route('/task')
			.data(TODO)
			.action(this.router.action.UPDATE)
			.send();
	}

}

export default SocketController