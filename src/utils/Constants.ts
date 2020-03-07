const SERVER_PORT: number = parseInt(
  (process.env.PORT as string) || '2130',
  10
);
const DB_URL: string = '127.0.0.1';
// const DB_URL: string = 'mongo';
const DB_PORT: number = 27017;
const DATABASE: string = 'sculptor';

export { SERVER_PORT, DB_URL, DB_PORT, DATABASE };
