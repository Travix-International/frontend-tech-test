import express from 'express'
import { readdirSync } from 'fs'
import bodyParser from 'body-parser'

//Import Controllers
import HeaderController from './controller/HeaderController'
import AuthController from './controller/AuthController'
import TODOController from './controller/TODOController'

//API Options
import program from 'commander'

class API {

    constructor (port = 9001) {
        const server = express();

        //Configurations
        server.use(bodyParser.json());

        /* 
         * Servers all the files in the public folder
         * to allow to run a Standalone version of the
         * server with the application
         */
        server.set('views', __dirname + '/public');
        server.engine('html', require('ejs').renderFile);
        server.set('view engine', 'html');
        server.use(express.static(__dirname + '/public'));

        //Middleware for modules instances
        const headerController = new HeaderController(server);
        const authController = new AuthController(server);
        const todoController = new TODOController(server);

        server.listen(port);
        console.log("Server Running on", port);
    }
}

/* 
 * Allows to run the server in a different port
 */
program
  .version('0.1.0')
  .option('-p, --port [port]', 'Server port (default 9001)')
  .parse(process.argv);

/* 
 * New API instance with specified configurations
 */
const APIInstance = new API(program.port);