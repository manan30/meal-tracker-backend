const SERVER_PORT: number = parseInt(process.env.PORT || '2130', 10);
const DB_URL: string = 'mongo';
const DB_PORT: number = 27017;
const DATABASE: string = 'sculptor';

export { SERVER_PORT, DB_URL, DB_PORT, DATABASE };
