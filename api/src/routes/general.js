const generalRoute = (router) => {
  router.get('/', (req, res) => {
    const list = [];
    router.stack.forEach(item => {
      const route = {
        path: item.route.path,
        method: item.route.stack[0].method.toUpperCase()
      };
      list.push(route);
    })
    res.render('index', { list });
  });
};

export default generalRoute;
