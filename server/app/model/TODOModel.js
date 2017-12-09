//Core Modules
import { readFileSync } from 'fs'

//TODOS
const todos = {};

//Read TODOS from db
const todos_json = JSON.parse(readFileSync(__dirname + '/tasks.json', 'utf8'));
for (let i = 0; i < todos_json.tasks.length; i++) {
    todos[i] = Object.assign({}, {
        tags: [],
        _id: i,
        title: '',
        description: '',
        completed: false
    }, todos_json.tasks[i]);
}

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
        const _id = Object.keys(todos).length;

        todos[_id] = Object.assign({}, {
            _id: _id,
            description: '',
            title: '',
            tags: [],
            completed: false
        }, request.body);

        return {
            [`${_id}`]: todos[_id]
        };
    }

    static * delete_task (request) {
        delete todos[request.params.id];

        return true;
    }

}

export default TODOModel