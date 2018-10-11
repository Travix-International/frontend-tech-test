const initialState = {
	error: false,
	loading: false,
	tasks: [],
	operation: '',
	operationStatus: false,
	selectedTaskId: null,
}

export default function (state = initialState, action) {
	switch (action.type) {
		case "todo_fetch_start":
			return Object.assign({}, state, { loading: true });
		case "todo_fetch_fail":
			return Object.assign({}, state, { loading: false, error: true });
		case "todo_fetch_success":
			return Object.assign({}, state, {
				loading: false,
				error: false,
				tasks: (action.payload.tasks || []).reverse(),
			});
		case "operation_req_start":
			return Object.assign({}, state, { loading: true, error: false, operation: action.payload });
		case "todo_operation_success":
			return Object.assign({}, state, { loading: false, error: false, operation: action.payload, operationStatus: true });
		case "todo_operation_fail":
			return Object.assign({}, state, { loading: false, error: false, operation: action.payload.operation, operationStatus: false });
		case "select_task_entry":
			return Object.assign({}, state, { selectedTaskId: action.payload })
		default:
			return Object.assign({}, state);
	}
}