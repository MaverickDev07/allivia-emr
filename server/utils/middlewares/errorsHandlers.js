import boom from 'boom'
import { config } from '../../config'

function withErrorStack(err, stack) {
  if(config.dev) {
    return { ...err, stack, ok: false } // Object.assign({}, err, stack)
  }
}

function logErrors(err, req, res, next) {
  console.log(err.stack)
  next(err)
}

function wrapErrors(err, req, res, next) {
  if(!err.isBoom) {
    next(boom.badImplementation(err))
  }

  next(err)
}

function clientErrorHandler(err, req, res, next) {
  const {
    output: { statusCode, payload}
  } = err
  res.status(statusCode).json(withErrorStack(payload, err.stack))
}

module.exports = {
  logErrors,
  wrapErrors,
  clientErrorHandler
}
