import HeaderModel from '../model/HeaderModel'

class HeaderController {

	constructor (server) {

		// Set Request headers for OPTIONS
		server.all('*', HeaderModel.setHeaders);

	}

}

export default HeaderController