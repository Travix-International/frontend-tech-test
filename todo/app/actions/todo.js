import { BASE_URL } from "../constants";

export function findTodos(from, search) {
    return (dispatch) => {
        return fetch(`${BASE_URL}/tasks?from=${from}&search=${search}`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => {
            if (response.ok) {
                response.json().then((json) => {
                    dispatch({
                        type: 'FETCH_TODOS',
                        todos: json.tasks,
                        total: json.total
                    });
                });
            }
        });
    }
}

export function addTodo (todo) {
    return (dispatch) => {
        return fetch(`${BASE_URL}/task/create`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(todo)
        })
    }
}

export function editTodo (todo) {
    return (dispatch) => {
        return fetch(`${BASE_URL}/task/update/${todo.id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(todo)
        });
    }
}

export function deleteTodo (id) {
    return (dispatch) => {
        return fetch(`${BASE_URL}/task/delete/${id}`, {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
        });
    }
}