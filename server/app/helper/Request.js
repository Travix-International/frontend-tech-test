class Request {

	static response (code, result, message, errors, data, response) {
		response.statusCode = code;

	    response.send(JSON.stringify(
	        {
	            "response": {
	                code: code,
	                result: result,
	                message: message,
	                timestamp: new Date().getTime(),
	                errors: errors,
	                data: data
	            }
	        }
	    ));
	}

	static success (message, errors, data, response, code) {
		response.statusCode = code;

		response.send(JSON.stringify(
			{
				"response": {
					code: code,
					result: 'success',
					message: message,
					timestamp: new Date().getTime(),
					errors: errors,
					data: data
				}
			}
		));
	}

	static error (message, errors, data, response) {
		response.statusCode = 401;

		response.send(JSON.stringify(
			{
				"response": {
					code: 401,
					result: 'error',
					message: message,
					timestamp: new Date().getTime(),
					errors: errors,
					data: data
				}
			}
		));
	}

}

export default Request