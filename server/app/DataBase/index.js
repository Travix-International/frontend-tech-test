//Third Party
import MongoServer from 'mongo-server'
import { MongoClient } from 'mongodb'

class DataBase {

    constructor () {
        const serverOptions = {
            port: 27017,
            host: '127.0.0.1'
        };

        MongoServer.start(serverOptions)
            .then(() => this.serverStart())
            .catch(console.log)
    }

    serverStart () {
        MongoClient.connect('mongodb://localhost:27017/travix', this.init.bind(this));
    }

    init (error, db) {
        if (error) {
            throw error;
        }

        //Store Connection locally
        this.connection = db;

        //Initialize database "schema"
        Promise
            .all([
                db.createCollection('todo')
                    .then(() => {})
                    .catch(console.log)
            ])
            .then(() => {})
            .catch(console.log);
    }

    insert (collection, data) {
        return this.connection
            .collection(collection)
            .insertOne(data);
    }

    select (collection, filters) {
        return this.connection
            .collection(collection)
            .find(filters)
            .toArray();
    }

    update (collection, filters, data) {
        return this.connection
            .collection(collection)
            .updateOne(filters, data);
    }

    delete (collection, filters) {
        return this.connection
            .collection(collection)
            .deleteMany(filters);
    }

}

//Creates Single Instance of HTTPServer
const db = new DataBase();

//Exports Instance
export default db