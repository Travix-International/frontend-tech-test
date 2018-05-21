'use strict';

const responseStatusCodes = {
  ok: 200,
  not_found: 404,
  created: 201,
  accepted: 202,
  bad_request: 400,
  no_content: 204
}

/**
 * Utility to return a not found response status (404)
 * @param res
 * @returns {any | Promise<any>}
 */
const notFound = (res) => res.status(responseStatusCodes.not_found).json({message: 'Not found.'});

/**
 * Utility to return a bad request response status (400)
 * @param res
 * @returns {any | Promise<any>}
 */
const badRequest = (res) => res.status(responseStatusCodes.bad_request).json({message: 'Bad request'});

/**
 * Utility to return a no content response  status (204). No content will be sent back to the client.
 * @param res
 * @returns {*|number}
 */
const noContent = (res) => res.status(responseStatusCodes.no_content).end();

/**
 * Utility to return a created response status (201).
 * @param res
 * @returns {*|number}
 */
const created = (res) => res.status(responseStatusCodes.created).end();

/**
 * Utility to return an ok response status (200) with body content.
 * @param content
 * @returns {function(*): *}
 */
const okWithJsonContent = (content) => (res) => res.status(responseStatusCodes.ok).json(content);

/**
 * Utility to return an accepted response status (202)
 * @param res
 * @returns {*|number}
 */
const accepted = (res) => res.status(responseStatusCodes.accepted).end();

module.exports = {
  notFound,
  badRequest,
  noContent,
  created,
  okWithJsonContent,
  accepted,
  responseStatusCodes
};
