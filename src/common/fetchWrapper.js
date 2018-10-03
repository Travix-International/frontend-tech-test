import fetch from 'isomorphic-fetch';

export const fetchWrapper = (url, method = 'GET', data) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        cache: 'no-cache',
        mode: 'no-cors',
    })
        .then(result => result.json())
        .catch(error => error.message)
}