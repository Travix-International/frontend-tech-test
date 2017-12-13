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
	getDataFromApi: async (uri, parameters) => {
		let mainURL = 'https://api.iph-uat.adaa.gov.sa/iph/';
		if (parameters) {
			const parametersKeys = Object.keys(parameters).map((key) => `${key}=${parameters[key]}`).join('&');
			mainURL = `${mainURL}${uri}?${parametersKeys}`;
		}
		try {
			const response = await fetch(mainURL);
			const responseJson = await response.json();
			return responseJson;
		} catch (error) {
			console.log(error);
		}
	},
};
