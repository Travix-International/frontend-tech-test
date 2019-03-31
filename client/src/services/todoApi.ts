import request from '@utils/request';
import Todo from '@models/Todo';

export function fetchTodos() {
    return request('/tasks');
}

interface todoData {
    title: Todo['title'];
    description: Todo['description'];
}

export function addTodo(data: todoData) {
    return request('/tasks', {
        method: 'POST',
        data,
    });
}

export function editTodo(id: Todo['id'], data: todoData) {
    return request(`/tasks/${id}`, {
        method: 'PUT',
        data,
    });
}

export function toggleTodo(id: Todo['id']) {
    return request(`/tasks/${id}/toggle`, {
        method: 'PUT',
    });
}

export function deleteTodo(id: Todo['id']) {
    return request(`/tasks/${id}`, {
        method: 'DELETE',
    });
}