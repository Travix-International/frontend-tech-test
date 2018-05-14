/**
 * Function called to return a not found response
 * @param res
 * @returns {any | Promise<any>}
 */
const notFound = (res) => res.status(404).json({message: "Not found."});

/**
 * Function called to return a bad request response
 * @param res
 * @returns {any | Promise<any>}
 */
const badRequest = (res) => res.status(500).json({message: "Bad request"});

module.exports = {notFound, badRequest};
