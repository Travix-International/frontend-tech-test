import HeaderModel from '../model/HeaderModel'

class HeaderController {

	constructor (server) {

		server.all('*', HeaderModel.setHeaders);

	}

}

export default HeaderController