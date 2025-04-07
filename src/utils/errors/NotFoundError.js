const HttpError = require('./HttpError');

class NotFoundError extends HttpError {
  constructor(message = 'Resource not found') {
    super(message, 404);
  }
}

module.exports = NotFoundError;
