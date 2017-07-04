import Task from './../database/task';

export const find = () => {
  return Task.find();
};

export const create = (title, description, date, completed) => {
  let task = new Task({
    title,
    description,
    date,
    completed
  });
  return task.save();
};

export const update = (id, title, description, date, completed) => {
 return Task.findById(id, (err, task) => {
    if (err) console.log(err);

    task.title = title;
    task.description = description;
    task.date = date;
    task.completed = completed;

    return task.save((err) => {
      if (err) console.log(err);
    });
  });
};

export const remove = (_id) => {
  return Task.remove({ _id });
};
