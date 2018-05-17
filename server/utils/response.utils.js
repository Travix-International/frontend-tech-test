'use strict';

/**
 * Utility to return a not found response status (404)
 * @param res
 * @returns {any | Promise<any>}
 */
const notFound = (res) => res.status(404).json({message: 'Not found.'});

/**
 * Utility to return a bad request response status (400)
 * @param res
 * @returns {any | Promise<any>}
 */
const badRequest = (res) => res.status(400).json({message: 'Bad request'});

/**
 * Utility to return a no content response  status (204). No content will be sent back to the client.
 * @param res
 * @returns {*|number}
 */
const noContent = (res) => res.status(204).end();

/**
 * Utility to return a created response status (201).
 * @param res
 * @returns {*|number}
 */
const created = (res) => res.status(201).end();

/**
 * Utility to return an ok response status (200) with body content.
 * @param res
 * @returns {function(*=): (*|Promise<any>)}
 */
const okWithJsonContent = (res) => (content) => res.status(200).json(content);

/**
 * Utility to return an accepted response status (202)
 * @param res
 * @returns {*|number}
 */
const accepted = (res) => res.status(202).end();

module.exports = {
  notFound,
  badRequest,
  noContent,
  created,
  okWithJsonContent,
  accepted
};
