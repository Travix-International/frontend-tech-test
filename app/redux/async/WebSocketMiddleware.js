//https://www.npmjs.com/package/web-socket-router
import WebSocketRouter from 'web-socket-router'

//Constans
import { TODO_ADD_SUCCEDED } from '../actions/TODOAdd'
import { TODO_UPDATE_SUCCEDED } from '../actions/TODOUpdate'
import { TODO_DONE_SUCCEDED } from '../actions/TODODone'

class WebSocketMiddleware {
	
	constructor (store) {
		// Let the store as local attribute to be accessed
		// By WebSocket Async methods
		this.store = store;

		const host = '10.0.0.187:9001';
		const webSocketRouterInstance = new WebSocketRouter(new WebSocket(`ws:\/\/${host}`));

		//On Taks created
		webSocketRouterInstance
			.create('/task', TODO => this.onAsyncTODOCreated(TODO))
			.bind(this);

		//On taks updated
		webSocketRouterInstance
			.update('/task', TODO => this.onAsyncTODOUpdated(TODO))
			.bind(this);

	}

	onAsyncTODOCreated (TODO) {
		this.store.dispatch({
			type: TODO_ADD_SUCCEDED,
			TODO: TODO
		});
	}

	onAsyncTODOUpdated (TODO) {
		const _id = Object.keys(TODO)[0];

		this.store.dispatch({
			type: (TODO[_id].completed ? TODO_DONE_SUCCEDED : TODO_UPDATE_SUCCEDED),
			TODOS: TODO
		});
	}

}

export default WebSocketMiddleware