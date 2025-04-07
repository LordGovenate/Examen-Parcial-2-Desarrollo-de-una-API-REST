const HttpError = require('./HttpError');

class ConflictError extends HttpError {
  constructor(message = 'Conflict: The resource already exists') {
    super(message, 409);
  }
}

module.exports = ConflictError;
