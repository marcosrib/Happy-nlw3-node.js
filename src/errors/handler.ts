import { ErrorRequestHandler, request, response } from 'express';

const errorHandler: ErrorRequestHandler = (error, request, response, next ) => {
  return response.status(500).json({ message: 'Internal server error'})
}

export default errorHandler;