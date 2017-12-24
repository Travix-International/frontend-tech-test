module.exports = {
	getCookie: (name) => {
		const re = new RegExp(`${name}=([^;]+)`);
		const value = process.browser ? re.exec(document.cookie) : '';
		return (value != null) ? unescape(value[1]) : null;
	},
	createCookie: (name, value, days) => {
		let expires = '';
		if (days) {
			const date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = `; expires=${date.toUTCString()}`;
		}
		if (process.browser) {
			document.cookie = `${name}=${value}${expires}; path=/`;
		}
	},
	asyncGetDataFromApi: async URL => {
		try {
			const response = await fetch(URL);
			return await response.json();
		} catch (error) {
			console.log(error);
		}
	},
	getDataFromApi: URL => fetch(URL).then(response => response.json()),
	setDataFromApi: (URL, data, method) => fetch(URL, {
		method,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data)
	}).then(response => response.json()).catch(reason => console.log(reason))
};

