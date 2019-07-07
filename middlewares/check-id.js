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

  return !Number.isNaN(id)
    ? next()
    : res.status(400).json({
        message: "Bad request"
      });
}

module.exports = checkID;
