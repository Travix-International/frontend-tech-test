import shortid from 'shortid';
import storage from './tasks.json';

// First iteration when all the elements are loaded just to ensure
// a internal and secuential key
storage.tasks = storage.tasks.map((item, i) => ({ ...item, key: i }));

const taskDao = (body, key) => ({
  key,
  id: shortid.generate(),
  title: body.title,
  description: body.description,
});

export default {
  create(body) {
    const newTask = taskDao(body, storage.tasks.length);

    storage.tasks.push(newTask);

    return Promise.resolve(newTask);
  },
  update(entityToUpdate, payload = {}) {
    storage.tasks = storage.tasks.map(item => (
      item.id.toString() === entityToUpdate.id.toString()
        ? { ...item, ...payload }
        : { ...item }
    ));

    return Promise.resolve(payload);
  },
  destroy(entityToDelete) {
    // not the best way just looking simple mutability over the
    // initial loaded collection
    storage.tasks = storage.tasks.filter(item =>
      item.id.toString() !== entityToDelete.id.toString()
    );
    return Promise.resolve(entityToDelete);
  },
  getOne(entity) {
    return Promise.resolve(entity);
  },
  getAll(limit, page) {
    const currentPage = parseInt(page, 10);
    const perPage = parseInt(limit, 10);
    const offset = (page - 1) * perPage;
    const paginatedItems = storage.tasks
      .sort((a, b) => (b.key - a.key))
      .slice(offset, offset + perPage);

    return Promise.resolve({
      currentPage,
      perPage,
      total: storage.tasks.length,
      totalPages: Math.ceil(storage.tasks.length / perPage),
      tasks: paginatedItems
    });
  },
  findByParam(id) {
    return Promise.resolve(
      storage.tasks.find(item => item.id.toString() === id.toString())
    );
  }
};
