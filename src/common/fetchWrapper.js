import 'es6-promise';
import 'isomorphic-fetch';

export const fetchWrapper = (url, method = 'GET', data) => {
	const fetchConfig = {
		method: method,
		// body: JSON.stringify(data),
		headers: {
			// 'Content-Type': 'application/json',
			// 'Accept': 'application/json',
			// 'Access-Control-Allow-Methods': 'GET,PUT,POST',
		},
		// credentials: 'omit',
		// cache: 'no-cache',
		// mode: 'cors',
	};
	return fetch(url, fetchConfig)
		.then(result => result.json())
		.catch(error => console.warn(error.message))
}