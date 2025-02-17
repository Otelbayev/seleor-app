function errorMiddleware(error, req, res, next) {
  if (error instanceof BaseError) {
    return res
      .status(error.status)
      .json({ message: error.message, errors: error.errors });
  }

  return res.status(500).josn({ message: error.message });
}

export default errorMiddleware;
