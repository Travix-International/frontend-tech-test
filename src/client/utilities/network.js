// Generic network requests to the API
const doNetworkRequest = (endpoint, requestType, body, callback, onErrorCallback) => {
	return (dispatch, getState) => {
		var currentSession = getState().session;

		// Make the request
		fetch(endpoint, {
			method: requestType,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: body
		})
		.then(response => 
			response.json()
			.then(body => ({
				headers: response,
				body: body
			})))
		.then((responseJson) => {
			// Handle errored network requests
			if (!responseJson.headers.ok) {
				if ((responseJson.headers.status == 403 || responseJson.headers.status == 401) &&
					responseJson.body.errorType &&
					responseJson.body.errorType === "expired" &&
					responseJson.body.type === "access_token") {
						// localStorage.clear();
						// dispatch(removeSession());
						// dispatch(changeRoute('/login'));

						// TODO: Handle error
				}
				else {
					// TODO: Handle error


					// Custom error text
					if (responseJson.body.error && responseJson.body.error.length > 0) {
						throw Error(responseJson.body.error);
					}
					else {
						throw Error(responseJson.headers.statusText);
					}
				}
		    }
		    else {
		    	// Success. Callback with the data
				callback(responseJson.body);
			}
		})
		.catch((error) => {
			// dispatch(setSessionLoading(false));
			alert("Oops, something went wrong. Try again!");
			console.log(error);

			if (onErrorCallback) {
				onErrorCallback();
			}
		});
	}
};
exports.doNetworkRequest = doNetworkRequest;