const USER_EXISTS = 'User already exists';

const USER_NOT_FOUND = 'User does not exist';

const SERVER_ERROR = (err: Error): string => `Internal server error: ${err}`;

const ACCOUNT_CREATED = 'Account created successfully';

const LOGIN_SUCCESSFUL = 'User login successful';

const LOGIN_FAILED = 'User login failed. Authentication error.';

const NOT_AUTHORIZED = 'You are not authorized to perform this operation';

const INVALID_TOKEN = 'Invalid token';

const RECIPE_POSTED = 'Recipe posted successfully';

export {
  USER_EXISTS,
  USER_NOT_FOUND,
  SERVER_ERROR,
  ACCOUNT_CREATED,
  NOT_AUTHORIZED,
  INVALID_TOKEN,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
  RECIPE_POSTED
};
