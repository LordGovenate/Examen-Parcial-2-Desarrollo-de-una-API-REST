const errorHandler = (err, req, res, next) => {
    console.error('[ERROR]', err);
  
    const statusCode = err.status || 500;
    const message = err.message || 'Error interno del servidor';
  
    res.status(statusCode).json({
      success: false,
      error: message
    });
  };
  
  module.exports = errorHandler;
  