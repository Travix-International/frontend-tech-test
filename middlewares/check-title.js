function checkTitle(req, res, next) {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      message: "Bad request",
    });
  }

  return next();
}

module.exports = checkTitle;
