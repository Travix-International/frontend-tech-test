import Request from '../helper/Request'
import HeaderModel from './HeaderModel'


//Helpers
import db from '../DataBase'
import axios from 'axios'

class AuthModel {

	static header_token_present (request, response, next) {
        //TODO Check If token present
        next();
    }

    static * header_token_valid (request) {
	    //TODO Check if token is valid
    }

}

export default AuthModel