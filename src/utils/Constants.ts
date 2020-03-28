const SERVER_PORT: number = parseInt(
  (process.env.PORT as string) || '2130',
  10
);

const DB_URL: string = process.env.DB_URL || '127.0.0.1';

const DB_PORT: number = parseInt(process.env.DB_PORT as string, 10) || 27017;

const DATABASE: string = process.env.DATABASE || 'sculptor';

export { SERVER_PORT, DB_URL, DB_PORT, DATABASE };
