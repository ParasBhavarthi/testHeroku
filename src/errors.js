class UserNotExistError extends Error {
  constructor () {
    super(`User does not exist.`);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

class UserAlreadyExistError extends Error {
  constructor () {
    super(`User already exists.`);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

class InvalidPasswordError extends Error {
  constructor () {
    super(`Invalid password.`);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export { UserNotExistError, InvalidPasswordError, UserAlreadyExistError }