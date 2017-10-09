import { DB_ERROR_CONSTANTS } from "../constants";

export default function (err, req, res, next) {
  if (err === DB_ERROR_CONSTANTS.RECORD_NOT_FOUND) {
    return res.status(404).end();
  }

  next();
}
