const USER_EXISTS = 'User already exists';

const SERVER_ERROR = (err: Error) => `Internal server error: ${err}`;

const ACCOUNT_CREATED = 'Account created successfully';

const NOT_AUTHORIZED = 'You are not authorized to perform this operation';

const INVALID_TOKEN = 'Invalid token';

export {
  USER_EXISTS,
  SERVER_ERROR,
  ACCOUNT_CREATED,
  NOT_AUTHORIZED,
  INVALID_TOKEN
};
