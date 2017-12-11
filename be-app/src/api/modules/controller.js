/** POST */
export const create = repository => (req, res, next) => (
  repository.create(req.body)
    .then(response => res.status(201).json(response))
    .catch(error => next(error))
);

/** PUT */
export const update = repository => (req, res, next) => (
  repository.update(req.entity, req.body)
    .then(response => res.status(204).json(response))
    .catch(error => next(error))
);

/** DELETE */
export const destroy = repository => (req, res, next) => (
  repository.destroy(req.entity)
    .then(entity => res.status(204).json(entity))
    .catch(error => next(error))
);

/** GET - by id */
export const getOne = repository => (req, res, next) => {
  return repository.getOne(req.entity)
    .then(response => res.status(200).json(response))
    .catch(error => next(error));
};

/** GET - list */
export const getAll = repository => (req, res, next) => {
  const { limit = 10, page = 1 } = req.query;

  return repository.getAll(limit, page)
    .then(response => res.status(200).json(response))
    .catch(error => next(error));
};

export const findByParam = repository => (req, res, next, id) => {
  return repository.findByParam(id)
    .then((entity) => {
      if (!entity) {
        const error = new Error('Not Found Error');

        error.status = 404;
        next(error);
      } else {
        req.entity = entity;
        next();
      }
    })
    .catch((error) => { next(error); });
};

export const generateControllers = repository => ({
  create: create(repository),
  destroy: destroy(repository),
  findByParam: findByParam(repository),
  getAll: getAll(repository),
  getOne: getOne(repository),
  update: update(repository),
});
