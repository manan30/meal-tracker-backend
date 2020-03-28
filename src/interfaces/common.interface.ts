import { Router } from 'express';

export type BaseModel = Document;

export interface RouteType {
  tag: string;
  router: Router;
}

export type PaginationObject<T> = {
  prev?: {
    page: number;
    limit: number;
  };
  results: Array<T>;
  next?: {
    page: number;
    limit: number;
  };
};
