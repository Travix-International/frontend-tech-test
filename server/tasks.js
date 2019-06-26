const createId = (num => () => ++num)(0);
exports.createId = createId;

exports.tasks = [...Array(400)].map(() => {
  const id = createId();
  return {
    id,
    title: `title of ${id}`,
    description: `description of ${id}`,
    done: false,
  };
});
