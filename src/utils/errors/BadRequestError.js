const HttpError = require('./HttpError');

class BadRequestError extends HttpError {
  constructor(message = 'Invalid request') {
    super(message, 400);
  }
}

module.exports = BadRequestError;
