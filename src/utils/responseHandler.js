function successResponse(res, data, message = 'Successful operation', statusCode = 200) {
    return res.status(statusCode).json({
      success: true,
      message,
      data
    });
  }
  
  function errorResponse(res, message = 'Internal Server Error', statusCode = 500) {
    return res.status(statusCode).json({
      success: false,
      message
    });
  }
  
  module.exports = {
    successResponse,
    errorResponse
  };
  