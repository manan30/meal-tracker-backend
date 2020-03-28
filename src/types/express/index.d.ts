import { Document } from 'mongoose';
import { PaginationObject } from '../../interfaces/common.interface';

declare global {
  namespace Express {
    export interface Response {
      paginatedData?: PaginationObject<Document>;
    }
  }
}
