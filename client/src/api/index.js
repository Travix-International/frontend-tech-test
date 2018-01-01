const base = 'http://localhost:9001';

const API = {
    todos: '/tasks/',
    addTodo: '/task/create',
    deleteTodo: '/task/delete',
    updateTodo: '/task/update',
};

const getQueryString = (params) => {
    const esc = encodeURIComponent;

    return Object.keys(params)
        .map(k => `${esc(k)}=${esc(params[k])}`)
        .join('&');
};

const request = (method, url, params) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    });
    const requestParams = {
        method,
        mode: 'cors',
        headers,
    };

    let requestUrl = base + url;
    if (params) {
        if (method === 'GET') {
            requestUrl = `${requestUrl}?${getQueryString(params)}`;
        } else {
            requestParams.body = JSON.stringify(params);
        }
    }

    return fetch(new Request(requestUrl, requestParams));
};

const put = (url, params) => {
    return request('PUT', url, params);
};

const post = (url, params) => {
    return request('POST', url, params);
};

const get = (url, params) => {
    return request('GET', url, params);
};

const remove = (url, params) => {
    return request('DELETE', url, params);
};

const template = async (method, address, params) => {
    const response = await method(address, params);
    const data = await response.json();
    const { error } = data;

    if (error) {
        throw error;
    }

    return data;
};

export default {
    getTodos(params) {
        return template(get, API.todos, params);
    },
    addTodo(params) {
        return template(post, API.addTodo, params);
    },
    deleteTodo(params) {
        return template(remove, API.deleteTodo, params);
    },
    updateTodo(params) {
        return template(put, API.updateTodo, params);
    },
};
