//Core Modules
import { 
    readdirSync, 
    existsSync, 
    mkdirSync, 
    rmdirSync 
} from 'fs'

//Database
import db from '../DataBase'

const todos = {};

class TODOModel {

    static * get_tasks (request) {
        return todos;
    }

    static * get_task_by_id (request) {
        return yield db.select('todo', {
            '_id': ObjectId(request.params.id)
        });
    }

    static * update_task_by_id (request) {
        todos[request.body._id] = request.body;

        return {
            [`${request.body._id}`]: request.body
        };
    }

    static * create_task (request) {
        todos[request.body._id] = Object.assign({}, {
                _id: Object.keys(todos).length,
                description: '',
                title: '',
                tags: [],
                completed: false
            }, request.body);

        return {
            [`${request.body._id}`]: todos[request.body._id]
        };
    }

    static * delete_task (request) {
        yield db.delete('todo', {
            "_id": ObjectId(id)
        });

        return true;
    }

}

export default TODOModel