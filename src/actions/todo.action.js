import { fetchWrapper } from '../common/fetchWrapper';

export const fetchTodo = (operation = '', status = false) => {

	return fetchWrapper('http://localhost:9001/tasks')
		.then(parseData => fetchSuccess(parseData))
		.catch(error => fetchFail(error))
}

export const createTask = (title, description) => {
	return fetchWrapper("http://localhost:9001/task/create/", 'POST', { title: title, description: description })
		.then(parseData => {
			if (parseData.message === 'Resource created') {
				return fetchTodo("create", true);
			} else {
				return operationFail("create", parseData);
			}
		})
		.catch(error => operationFail("create", error))
}

export const selectTaskFromStore = (taskId) => {
	return {
		type: "select_task_entry",
		payload: taskId
	};
};

export const modifyTask = (taskId, title, description) => {
	return fetchWrapper(`http://localhost:9001/task/update/${taskId}`, 'PUT', { title: title, description: description })
		.then(parseData => {
			if (parseData.message === 'update success') {
				return operationuccess("update", true);
			} else {
				return operationFail("update", parseData);
			}
		})
		.catch(error => operationFail("update", error))
}

export const deleteTask = (taskId) => {
	return fetchWrapper(`http://localhost:9001/task/delete/${taskId}`, 'DELETE')
		.then(parseData => {
			debugger;
			if (parseData.message === 'delete success') {
				return operationuccess("delete", true);
			} else {
				return operationFail("delete", parseData.message);
			}
		})
		.catch(error => operationFail("delete", error))
}

export const fetchStart = () => { return { type: "todo_fetch_start" } }
const fetchSuccess = (result) => { return { type: "todo_fetch_success", payload: result } };
const fetchFail = (error) => { return { type: "todo_fetch_fail", payload: error } };

export const operationStart = (operation) => { return { type: "operation_req_start", payload: operation } }
const operationuccess = (operation) => { return { type: "todo_operation_success", payload: operation } };
const operationFail = (operation, error) => { return { type: "todo_operation_fail", payload: { operation, error } } };