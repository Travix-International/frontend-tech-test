class HeaderModel {

	static setHeaders (request, response, next) {
		response.set('Access-Control-Allow-Origin','*');
	    response.set('Access-Control-Allow-Methods','OPTIONS,DELETE,PUT,POST,GET');
        response.set('Access-Control-Allow-Headers','DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type');
		response.set('Content-Type', 'application/json');
		next ();
	}

	static headers (request) {
		return {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'X-Auth-token': request.headers['x-auth-token']
		}
	}


}

export default HeaderModel