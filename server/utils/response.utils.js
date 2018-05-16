/**
 * Utility to return a not found response (404)
 * @param res
 * @returns {any | Promise<any>}
 */
const notFound = (res) => res.status(404).json({message: 'Not found.'});

/**
 * Utility to return a bad request response (400)
 * @param res
 * @returns {any | Promise<any>}
 */
const badRequest = (res) => res.status(400).json({message: 'Bad request'});

/**
 * Utility to return a no content response (204). No content will be sent back to the client.
 * @param res
 * @returns {*|number}
 */
const noContent = (res) => res.status(204).end();

/**
 * Utility to return a created response (201).
 * @param res
 * @returns {ServerResponse}
 */
const created = (res) => res.status(201).end();

/**
 * Utility to return an ok response with body content (200).
 * @param res
 * @returns {function(*=): (*|Promise<any>)}
 */
const okWithJsonContent = (res) => (content) => res.status(200).json(content);

module.exports = {
  notFound,
  badRequest,
  noContent,
  created,
  okWithJsonContent
};
