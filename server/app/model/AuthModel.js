//Model
import Request from '../helper/Request'
import HeaderModel from './HeaderModel'

//Helpers
import axios from 'axios'

class AuthModel {

	static header_token_present (request, response, next) {
        //TODO Check If auth token present
        next();
    }

    static * header_token_valid (request) {
	    //TODO Check if token auth is valid
    }

}

export default AuthModel