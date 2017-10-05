import mongoose from "mongoose";
import { DB_ERROR_CONSTANTS } from "../../constants";

const Schema = mongoose.Schema;

let Todo;

const TodoSchema = Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

TodoSchema.statics.getAll = function () {
  return this.find()
              .exec();
};

TodoSchema.statics.get = function (id) {
    return this.find({_id: id})
      .exec()
      .then(collection => !collection.length ? Promise.reject(DB_ERROR_CONSTANTS.RECORD_NOT_FOUND) : Promise.resolve(collection));
};

TodoSchema.statics.update = function (data) {
  return this.find({_id: data._id})
  .exec()
  .then(collection => {
    if(!collection.length) return Promise.reject(DB_ERROR_CONSTANTS.RECORD_NOT_FOUND);

    let entity = collection[0];

    entity.title = data.title;
    entity.description = data.description;

    return entity.save();
  });
};

TodoSchema.statics.create = function (data) {
  const entity = new Todo({
      title: data.title,
      description: data.description
  });

  return entity.save();
};

TodoSchema.statics.delete = function (id) {
  return new Promise((resolve, reject) => {
    this.findByIdAndRemove(id, (err, result) => {
      if (!result) {
        return reject(DB_ERROR_CONSTANTS.RECORD_NOT_FOUND);
      }

      return resolve(result);
    });
  });
};

Todo = mongoose.model('Todo', TodoSchema, 'todos' );

export default Todo;
