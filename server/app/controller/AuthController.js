//Models
import AuthModel from '../model/AuthModel'

//Helpers
import Request from '../helper/Request'
import Saga from '../helper/Saga'

class AuthController {

	constructor (server) {

		//Set ContentType and Allowed Headers
        server.all('*', AuthModel.header_token_present);
        server.all('*', this.header_token_valid);

	}

    /* 
     *  header_token_valid Interceptor for all routes
     */
	header_token_valid (request, response, next) {
        Saga.saga_builder(AuthModel.header_token_valid, request)
            .then(next)
            .catch(
                error => Request.error('No access allowed.', [error.stack], {}, response)
            );
    }

}

export default AuthController