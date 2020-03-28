import { PaginationObject } from '../interfaces/common.interface';

declare namespace Express {
  export interface Response {
    paginatedData?: PaginationObject<Document>;
  }
}
