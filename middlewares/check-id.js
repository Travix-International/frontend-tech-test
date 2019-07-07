/**
 * Todo ID checking middleware
 * Return the 400 Error if it doesn't fit
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function checkID(req, res, next) {
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: "Bad request"
    });
  }

  // to pass to next middleware
  res.locals.id = id;
  return next();
}

module.exports = checkID;
