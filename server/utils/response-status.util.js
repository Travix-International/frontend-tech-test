const responseUtils = require('./response.utils');
// List of HTTP response statuses used in the server app
const responseStatus = ({
  OK: {
    code: responseUtils.responseStatusCodes.ok,
    response: responseUtils.okWithJsonContent
  },
  NOT_FOUND: {
    code: responseUtils.responseStatusCodes.not_found,
    response: responseUtils.notFound
  },
  BAD_REQUEST: {
    code: responseUtils.responseStatusCodes.bad_request,
    response: responseUtils.badRequest
  },
  NO_CONTENT: {
    code: responseUtils.responseStatusCodes.no_content,
    response: responseUtils.noContent
  },
  CREATED: {
    code: responseUtils.responseStatusCodes.created,
    response: responseUtils.created
  },
  ACCEPTED: {
    code: responseUtils.responseStatusCodes.accepted,
    response: responseUtils.accepted
  }
});

module.exports = {
  responseStatus,
}
