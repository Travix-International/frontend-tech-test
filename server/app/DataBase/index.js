class DataBase {

    constructor () {
        this.todos = [];
    }

    insert (collection, data) {
        data.id = this.todos.length;
        this.todos.push(data);
        return [data];
    }

    update (collection, filter, data) {
        //
    }

    selectAll (collection, filters) {
        return this.todos;
    }

    select (collection, filters) {
        return this.todos.map(function (todo) {
            return todo.id == filters.id;
        });;
    }

    delete (collection, filters) {
        //
    }

}

//Creates Single Instance of HTTPServer
const db = new DataBase();

//Exports Instance
export default db