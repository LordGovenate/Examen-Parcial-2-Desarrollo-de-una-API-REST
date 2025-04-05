
exports.successResponse = (res, data = {}, message = 'Operación exitosa', status = 200) => {
    res.status(status).json({
      success: true,
      message,
      data
    });
  };
  
  exports.errorResponse = (res, message = 'Error del servidor', status = 500, errors = null) => {
    const response = {
      success: false,
      message
    };
    if (errors) response.errors = errors;
  
    res.status(status).json(response);
  };
  